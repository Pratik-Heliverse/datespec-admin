import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Redux Store
import { useSelector } from 'store';
import { taskActions } from 'store/slices/tasks';
import { dispatch } from 'store';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import TaskDetailsPage from './TaskDetails';
import SkeletonLoadingTask from 'ui-component/skeletons/app/tasks/SkeletonLoadingTasks';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TaskDetails = () => {
    const { taskId } = useParams();

    const { isLoading, taskDetails } = useSelector((state) => state.tasks);
    const { getTaskDetails } = taskActions;

    useEffect(() => {
        if (taskId) {
            dispatch(getTaskDetails(taskId));
        }
    }, [taskId, getTaskDetails]);

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Tasks: Details</Typography>
                    </Grid>
                    <Grid item>
                        <Button size={'small'} variant="outlined">
                            {/* TODO: Do something about it */}
                            Back
                        </Button>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            {isLoading ? <SkeletonLoadingTask /> : <TaskDetailsPage taskData={taskDetails} />}
        </MainCard>
    );
};

export default TaskDetails;
