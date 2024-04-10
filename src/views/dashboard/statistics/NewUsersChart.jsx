import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';
import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grid, Box, Card, Stack, TextField, MenuItem, Typography } from '@mui/material';
import { IconBrandAndroid, IconBrandApple } from '@tabler/icons-react';
import chartData from './chart-data/totalNewUsers.data';

function NewUsersChart() {
    const theme = useTheme();

    const { mode } = useConfig();

    const secondaryMain = theme.palette.secondary.main;
    const errorMain = theme.palette.error.main;
    const primaryDark = theme.palette.primary.dark;

    React.useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [secondaryMain, errorMain, primaryDark],
            tooltip: { theme: mode }
        };
        ApexCharts.exec(`market-share-area-chart`, 'updateOptions', newChartData);
    }, [mode, secondaryMain, errorMain, primaryDark]);
    return (
        <Card>
            <Box sx={{ padding: 3 }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="h3">New Users</Typography>
                    <TextField size="small" select defaultValue={'week'}>
                        <MenuItem value={'week'}>Last Week</MenuItem>
                        <MenuItem value={'month'}>Last Month</MenuItem>
                        <MenuItem value={'year'}>Last Year</MenuItem>
                    </TextField>
                </Stack>
                <Grid item container alignItems="center" spacing={3}>
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        color: 'secondary.main',
                                        borderRadius: '12px',
                                        padding: 1,
                                        bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'secondary.light'
                                    }}
                                >
                                    <IconBrandAndroid stroke={1.5} />
                                </Typography>
                            </Grid>
                            <Grid item sm zeroMinWidth>
                                <Typography variant="h4">+ 45</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        color: 'primary.main',
                                        borderRadius: '12px',
                                        padding: 1,
                                        bgcolor: mode === ThemeMode.DARK ? 'background.default' : 'primary.light'
                                    }}
                                >
                                    <IconBrandApple stroke={2} />
                                </Typography>
                            </Grid>
                            <Grid item sm zeroMinWidth>
                                <Typography variant="h4">+ 30</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item>
                                <Typography
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        color: 'error.main',
                                        borderRadius: '12px',
                                        padding: 1,
                                        bgcolor: mode === ThemeMode.DARK ? 'background.default' : alpha(theme.palette.error.light, 0.25)
                                    }}
                                >
                                    <MoreHorizIcon stroke={1.5} />
                                </Typography>
                            </Grid>
                            <Grid item sm zeroMinWidth>
                                <Typography variant="h4"> + 12</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs zeroMinWidth />
                </Grid>
            </Box>
            <Chart {...chartData} />
        </Card>
    );
}

export default NewUsersChart;
