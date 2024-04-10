import React, { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import useConfig from 'hooks/useConfig';
import MainCard from 'ui-component/cards/MainCard';

// chart options
const polarChartOptions = {
    chart: {
        width: 450,
        height: 450,
        type: 'polarArea'
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: true,
        offsetX: 10,
        offsetY: 10,
        position: 'bottom',
        labels: {
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            radius: 5
        },
        itemMargin: {
            horizontal: 25,
            vertical: 4
        }
    },
    responsive: [
        {
            breakpoint: 450,
            chart: {
                width: 280,
                height: 280
            },
            options: {
                legend: {
                    show: false,
                    position: 'bottom'
                }
            }
        }
    ]
};

// ==============================|| POLAR CHART ||============================== //

const PaymentMethodDistributionChart = () => {
    const theme = useTheme();
    const { mode } = useConfig();

    const { primary } = theme.palette.text;
    const darkLight = theme.palette.dark.light;
    const divider = theme.palette.divider;
    const backColor = theme.palette.background.paper;

    const [series] = useState([14, 23, 21, 17, 15]);
    const [options, setOptions] = useState(polarChartOptions);

    const secondary = theme.palette.secondary.main;
    const primaryMain = theme.palette.primary.main;
    const successDark = theme.palette.success.dark;
    const error = theme.palette.error.main;
    const warningDark = theme.palette.warning.dark;
    const orangeDark = theme.palette.orange.dark;

    React.useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [secondary, primaryMain, successDark, error, warningDark, orangeDark, error],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            labels: ['UPI', 'PayPal', 'Cr/De Cards', 'Net Banking', 'Bank Transfer'],
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
            legend: {
                labels: {
                    colors: 'grey.500'
                }
            },
            stroke: {
                colors: [backColor]
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeColor: divider
                    },
                    spokes: {
                        connectorColors: divider
                    }
                }
            }
        }));
    }, [mode, primary, darkLight, divider, backColor, secondary, primaryMain, successDark, error, warningDark, orangeDark]);

    return (
        <MainCard title={'Payment Methods Distribution'}>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="polarArea" />
            </div>
        </MainCard>
    );
};

export default PaymentMethodDistributionChart;
