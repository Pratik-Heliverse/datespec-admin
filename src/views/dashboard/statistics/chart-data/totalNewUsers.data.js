// ==============================|| DASHBOARD - MARKET SHARE AREA CHART ||============================== //

const chartData = {
    height: 335,
    type: 'area',
    options: {
        chart: {
            id: 'market-share-area-chart',
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            },
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 80, 100]
            }
        },
        legend: {
            show: true
        },
        yaxis: {
            min: 1,
            max: 100,
            labels: {
                show: false
            }
        }
    },
    series: [
        {
            name: 'Android',
            data: [10, 90, 65, 85, 40, 80, 30]
        },
        {
            name: 'iOS',
            data: [50, 30, 45, 15, 60, 10, 25]
        }
    ]
};

export default chartData;
