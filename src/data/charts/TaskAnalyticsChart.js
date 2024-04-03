export const taskAnalyticsChartData = (taskData) => ({
    series: taskData?.series || [],
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
            categories: taskData?.categories || []
        },
        yaxis: {
            title: {
                text: 'No. of tasks'
            }
        }

        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return '$ ' + val + ' thousands';
        //         }
        //     }
        // }
    }
});
