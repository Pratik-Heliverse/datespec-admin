import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Card, Grid, Stack, TextField, MenuItem, LinearProgress, Divider } from '@mui/material';
import { dispatch } from 'store';
import Chart from 'react-apexcharts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconNumberCard from 'ui-component/cards/IconNumberCard';
import { taskAnalyticsChartData } from 'data/charts/TaskAnalyticsChart';
import { getUserTasknAlyticsData } from 'utils/analytics/getUserTaskAnalyticsData';
import { gridSpacing } from 'store/constant';
import { taskActions } from 'store/slices/tasks';
import { getDateFromToday } from 'utils/getDateFromToday';
import { useSelector } from 'store';
import SkeletonLoadingTaskAnalytics from 'ui-component/skeletons/app/tasks/SkeletonLoadingTaskAnalytics';

TaskListAnalytics.propTypes = {
    uid: PropTypes.string
};

function TaskListAnalytics({ uid }) {
    const [duration, setDuration] = useState('week');
    const [from, setFrom] = useState(getDateFromToday(-7));
    const [to, setTo] = useState(getDateFromToday(-1));

    const { getUserTasksAnalytics } = taskActions;
    const { isLoading, data } = useSelector((state) => state?.tasks?.userTaskAnalytics);

    const taskData = useMemo(() => getUserTasknAlyticsData(data?.dayTaskCounts, from, to, duration), [from, to, uid, isLoading]);

    // console.log({ taskData });

    const handleDuratinChange = (e) => {
        setDuration(e.target.value);
        if (e.target.value === 'week') {
            setFrom(getDateFromToday(-7)); // Date of day for a week ago
            setTo(getDateFromToday(-1)); // Yesterday
        }
        if (e.target.value === 'month') {
            setFrom(getDateFromToday(-28)); // Date of day for a month ago
            setTo(getDateFromToday(-1)); // Yesterday
        }
    };

    useEffect(() => {
        if (from && to) {
            dispatch(getUserTasksAnalytics({ uid, to, from }));
            // console.log(getCategoryDates(from, to));
        }
    }, [from, to, uid]);

    return (
        <Box p={3}>
            {isLoading ? (
                <Box my={2}>
                    <SkeletonLoadingTaskAnalytics />
                </Box>
            ) : (
                <Card>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant="h2">Activity </Typography>
                            <Typography variant="subtitle2" mt={1}>
                                Activity of user in last 4 weeks
                            </Typography>
                        </Grid>
                        <Grid item md={1} xs={3}>
                            <TextField size={'small'} select label={'For'} value={duration} onChange={handleDuratinChange} fullWidth>
                                <MenuItem value={'week'}> This Week</MenuItem>
                                <MenuItem value={'month'}> This Month</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container spacing={gridSpacing}>
                        <Grid item md={8} xs={12}>
                            <Chart {...taskAnalyticsChartData(taskData)} />
                        </Grid>
                        <Grid item md={4} xs={12} spacing={1}>
                            <Stack gap={2} fullWidth>
                                <Card variant="outlined" width={'100%'}>
                                    <IconNumberCard
                                        title="New Tasks"
                                        primary={data?.newTasksCount}
                                        color="primary.dark"
                                        iconPrimary={FormatListBulletedIcon}
                                    />
                                </Card>
                                <Card variant="outlined" width={'100%'}>
                                    <IconNumberCard
                                        title="Completed Tasks"
                                        primary={data?.completedTasksCount}
                                        color="secondary.main"
                                        iconPrimary={TaskAltIcon}
                                    />
                                </Card>
                                <Card variant="outlined" width={'100%'}>
                                    <Box py={2} px={3}>
                                        <Stack spacing={1}>
                                            <Typography variant="subtitle2">Goal Progress</Typography>
                                            <Stack direction={'row'} alignItems={'flex-end'}>
                                                <Typography variant="h3" color={'error.main'}>
                                                    {data?.completedTasksCount}
                                                </Typography>
                                                <Typography variant="h6"> / {data?.totalTasksCount}</Typography>
                                            </Stack>
                                            <LinearProgress
                                                variant="determinate"
                                                value={(data?.completedTasksCount * 100) / data?.totalTasksCount}
                                                color="error"
                                                aria-label="project progress"
                                            />
                                        </Stack>
                                    </Box>
                                </Card>
                            </Stack>
                        </Grid>
                    </Grid>
                </Card>
            )}
            <Divider />
        </Box>
    );
}

export default TaskListAnalytics;
