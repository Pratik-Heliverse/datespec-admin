export const taskAnalyticsChartData = {
    series: [
        {
            name: 'Total',
            data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
            name: 'Rescheduled',
            data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
            name: 'Pending',
            data: [76, 32, 17, 52, 33, 22, 35]
        },
        {
            name: 'Completed',
            data: [35, 41, 36, 26, 45, 48, 52]
        }
    ],
    type: 'bar',
    height: 350,
    options: {
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                }
            }
        }
    }
};
