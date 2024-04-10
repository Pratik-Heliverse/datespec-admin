// ==============================|| DASHBOARD - MARKET SHARE AREA CHART ||============================== //

const pieChartData = {
    height: 250,
    type: 'donut',
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
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Apple'],
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
    series: [44, 55, 41, 17, 15]
};

export default pieChartData;
