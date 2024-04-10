import React, { useState } from 'react';
import { Box, Card, Typography, TextField, MenuItem } from '@mui/material';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';

// chart options
const lineChartOptions = {
    chart: {
        height: 250,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
};

// ==============================|| LINE CHART ||============================== //

const NewSubscriptionsChart = () => {
    const theme = useTheme();
    const { mode } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;
    const secondary = theme.palette.secondary.main;

    const [series] = useState([
        {
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
    ]);

    const [options, setOptions] = useState(lineChartOptions);

    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [secondary],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: divider
            },
            tooltip: {
                theme: mode
            }
        }));
    }, [mode, primary, darkLight, divider, secondary]);
    return (
        <MainCard
            title={'New Subscriptions'}
            secondary={
                <TextField size="small" select label={'Duration'} defaultValue={'week'}>
                    <MenuItem value={'week'}>Week</MenuItem>
                    <MenuItem value={'month'}>Month</MenuItem>
                    <MenuItem value={'year'}>Year</MenuItem>
                </TextField>
            }
        >
            {/* <Box py={3} pl={3}>
                <Typography variant="h3"></Typography>
            </Box> */}
            <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={250} />
            </div>
        </MainCard>
    );
};

export default NewSubscriptionsChart;
