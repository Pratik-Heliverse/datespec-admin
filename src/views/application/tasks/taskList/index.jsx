import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { dispatch, useSelector } from 'store';
import { taskActions } from 'store/slices/tasks';
// assets

import TaskListTable from './TaskList';
import PaginationCustom from 'ui-component/custom/Pagination';
import { usePagination } from 'hooks/usePagination';
import TaskListToolbar from './TaskListToolbar';
import TaskListAnalytics from './TaskListAnalytics';
import useDebounce from 'hooks/useDebounce';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TaskList = () => {
    const { id: uid } = useParams();

    const { userTasks, isLoading } = useSelector((state) => state.tasks);
    const { getUserTasks } = taskActions;
    const { currentPage, handleCurrentPage, handleRowsPerPage, rowsPerPage } = usePagination();

    const [title, setTitle] = useState('');
    const [filters, setFilters] = useState({
        attachments: 'all',
        startDate: null,
        endDate: null
    });

    const debouncedTitle = useDebounce(title, 500);

    const handleChangeFilters = (e) => {
        setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        if (uid) {
            dispatch(getUserTasks({ uid, filters: { ...filters, title: debouncedTitle } }));
        }
    }, [uid, filters, debouncedTitle]);

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Tasks: List</Typography>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <TaskListAnalytics />
            <TaskListToolbar handleChangeFilters={handleChangeFilters} title={title} handleChangeTitle={handleChangeTitle} />
            <TaskListTable data={userTasks} isLoading={isLoading} rowsPerPage={userTasks.length} />
            <PaginationCustom
                totalEntries={userTasks.length}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                handleCurrentPage={handleCurrentPage}
                handleRowsPerPage={handleRowsPerPage}
            />
        </MainCard>
    );
};

export default TaskList;
