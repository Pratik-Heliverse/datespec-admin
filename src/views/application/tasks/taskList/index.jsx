import React, { useEffect } from 'react';
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

// ==============================|| USER LIST STYLE 1 ||============================== //

const TaskList = () => {
    const { id: uid } = useParams();

    const { userTasks, isLoading } = useSelector((state) => state.tasks);
    const { getUserTasks } = taskActions;

    useEffect(() => {
        if (uid) {
            dispatch(getUserTasks(uid));
        }
    }, [uid]);

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
            <TaskListTable data={userTasks} isLoading={isLoading} rowsPerPage={userTasks.length} />
        </MainCard>
    );
};

export default TaskList;
