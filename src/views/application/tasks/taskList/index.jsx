import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
// import { dispatch, useSelector } from 'store';
import { dispatch } from 'store';
import { taskActions } from 'store/slices/tasks';
// assets

// import TaskListTable from './TaskList';
// import PaginationCustom from 'ui-component/custom/Pagination';
import { usePagination } from 'hooks/usePagination';
// import TaskListToolbar from './TaskListToolbar';
import TaskListAnalytics from './TaskListAnalytics';
import useDebounce from 'hooks/useDebounce';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TaskList = () => {
    const { id: uid } = useParams();

    // const { userTasks, isLoading, totalUserTasks } = useSelector((state) => state.tasks);
    const { getUserTasks } = taskActions;
    // const { currentPage, handleCurrentPage, handleRowsPerPage, rowsPerPage } = usePagination();
    const { currentPage, rowsPerPage } = usePagination();

    const [title, setTitle] = useState('');
    const [filters, setFilters] = useState({
        attachment: 'all',
        from: null,
        to: null
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
            dispatch(getUserTasks({ uid, filters: { ...filters, title: debouncedTitle, limit: rowsPerPage, page: currentPage } }));
        }
    }, [uid, filters, debouncedTitle, rowsPerPage, currentPage]);

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Tasks: List</Typography>
                        <Typography variant="subtitle2">{uid}</Typography>
                        {/* <Stack direction={'row'} gap={1} alignItems={'center'}>
                            
                        </Stack> */}
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <TaskListAnalytics uid={uid} />
            {/* 
            <TaskListToolbar
                filters={filters}
                handleChangeFilters={handleChangeFilters}
                title={title}
                handleChangeTitle={handleChangeTitle}
            />
            <TaskListTable data={userTasks} isLoading={isLoading} rowsPerPage={userTasks.length} />
            <PaginationCustom
                totalEntries={totalUserTasks}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                handleCurrentPage={handleCurrentPage}
                handleRowsPerPage={handleRowsPerPage}
            />
            */}
        </MainCard>
    );
};

export default TaskList;
