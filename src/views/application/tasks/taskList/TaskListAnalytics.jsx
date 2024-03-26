import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, Grid, Stack, TextField, MenuItem, LinearProgress, Divider } from '@mui/material';
// import { dispatch } from 'store';
import Chart from 'react-apexcharts';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import IconNumberCard from 'ui-component/cards/IconNumberCard';
import { taskAnalyticsChartData } from 'data/charts/TaskAnalyticsChart';
import { gridSpacing } from 'store/constant';
// import { taskActions } from 'store/slices/tasks';

function TaskListAnalytics() {
    const [duration, setDuration] = useState('week');

    // const { getUserTasksAnalytics } = taskActions;

    const handleDuratinChange = (e) => {
        setDuration(e.target.value);
    };

    useEffect(() => {
        // dispatch(getUserTasksAnalytics(duration));
    }, [duration]);

    return (
        <Box p={3}>
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
                        <Chart {...taskAnalyticsChartData} />
                    </Grid>
                    <Grid item md={4} xs={12} spacing={1}>
                        <Stack gap={2} fullWidth>
                            <Card variant="outlined" width={'100%'}>
                                <IconNumberCard
                                    title="New Tasks"
                                    primary="6035"
                                    color="primary.dark"
                                    iconPrimary={FormatListBulletedIcon}
                                />
                            </Card>
                            <Card variant="outlined" width={'100%'}>
                                <IconNumberCard title="Completed Tasks" primary="6035" color="secondary.main" iconPrimary={TaskAltIcon} />
                            </Card>
                            <Card variant="outlined" width={'100%'}>
                                <Box py={2} px={3}>
                                    <Stack spacing={1}>
                                        <Typography variant="subtitle2">Goal Progress</Typography>
                                        <Stack direction={'row'} alignItems={'flex-end'}>
                                            <Typography variant="h3" color={'error.main'}>
                                                15
                                            </Typography>
                                            <Typography variant="h6"> / 24</Typography>
                                        </Stack>
                                        <LinearProgress
                                            variant="determinate"
                                            value={1500 / 24}
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
            <Divider />
        </Box>
    );
}

export default TaskListAnalytics;
