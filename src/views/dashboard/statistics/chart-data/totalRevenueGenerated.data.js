// ==============================|| WIDGET - CONVERSION CHART ||============================== //

export const totalRevenueGeneratedData = {
    type: 'bar',
    height: 350,
    options: {
        colors: ['#29314f'],
        chart: {
            id: 'new-stack-chart',
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: true
            },
            y: {
                title: {
                    formatter: () => 'Stock - '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41]
        }
    ]
};
