export const signUpSourcesChart = {
    height: 350,
    type: 'donut',
    options: {
        chart: {
            id: 'signup-sources-chart'
        },
        dataLabels: {
            enabled: false
        },
        labels: ['Google', 'Apple', 'Facebook', 'Email', 'Others'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit'
            },
            itemMargin: {
                horizontal: 10,
                vertical: 10
            }
        }
    },
    series: [300, 250, 189, 200, 80]
};
