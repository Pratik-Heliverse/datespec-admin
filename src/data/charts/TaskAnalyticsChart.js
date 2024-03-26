// export const taskAnalyticsChartData = {
//     height: 350,
//     type: 'bar',
//     options: {
//         chart: {
//             id: 'market-sale-chart',
//             toolbar: {
//                 show: false
//             },
//             zoom: {
//                 enabled: false
//             },
//             sparkline: {
//                 enabled: true
//             }
//         },
//         dataLabels: {
//             enabled: false
//         },
//         stroke: {
//             curve: 'smooth',
//             width: 2
//         },
//         fill: {
//             type: 'gradient',
//             gradient: {
//                 shadeIntensity: 0,
//                 opacityFrom: 0.5,
//                 opacityTo: 0,
//                 stops: [0, 80, 100]
//             }
//         },
//         legend: {
//             show: false
//         },
//         xaxis: {
//             categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//         },
//         yaxis: {
//             min: 1,
//             max: 100,
//             labels: {
//                 show: true
//             }
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: '55%',
//                 endingShape: 'rounded'
//             }
//         }
//     },
//     series: [
//         {
//             name: 'Youtube',
//             data: [10, 90, 65, 85, 40, 80, 30]
//         },
//         {
//             name: 'Facebook',
//             data: [50, 30, 25, 15, 60, 10, 25]
//         },
//         {
//             name: 'Twitter',
//             data: [5, 50, 40, 55, 20, 40, 20]
//         }
//     ]
// };

export const taskAnalyticsChartData = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
            name: 'Free Cash Flow',
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
