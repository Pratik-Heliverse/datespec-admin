import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

// third party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { signUpSourcesChart } from './chart-data/signupSourcesChart.data';

// ===========================|| REVENUE CHART CARD ||=========================== //

const UserSIgninSourcesChart = ({ chartData = signUpSourcesChart }) => {
    return (
        <MainCard title="User Signup sources">
            <Grid container spacing={2} direction={{ xs: 'column', sm: 'row', md: 'column' }}>
                <Grid item xs={12} sm={7} md={12}>
                    <Chart {...chartData} />
                </Grid>
                <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
                    <Grid item>
                        <Divider />
                    </Grid>
                </Box>
                {/* <Grid item container justifyContent="space-around" alignItems="center" xs={12} sm={5} md={12}>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Youtube</Typography>
                            <Typography variant="subtitle1" sx={{ color: 'error.main' }}>
                                + 16.85%
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Facebook</Typography>
                            <Box sx={{ color: 'primary.main' }}>
                                <Typography variant="subtitle1" color="inherit">
                                    + 45.36%
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Grid container direction="column">
                            <Typography variant="h6">Twitter</Typography>
                            <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
                                - 50.69%
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Grid>
        </MainCard>
    );
};

UserSIgninSourcesChart.propTypes = {
    chartData: PropTypes.object
};

export default UserSIgninSourcesChart;
