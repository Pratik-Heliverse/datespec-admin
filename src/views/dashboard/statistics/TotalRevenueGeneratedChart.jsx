import PropTypes from 'prop-types';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import { Divider, Stack, TextField, MenuItem } from '@mui/material';

// =========================|| CONVERSIONS CHART CARD ||========================= //

const TotalRevenueGeneratedChart = ({ chartData }) => {
    return (
        <MainCard content={false}>
            <Stack sx={{ p: 3, pb: 1 }} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1">Total Revenue Generated</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">(This Week)</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography variant="h4">$ 4500</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <TextField size="small" select label={'Duration'} defaultValue={'week'}>
                    <MenuItem value={'week'}>Week</MenuItem>
                    <MenuItem value={'month'}>Month</MenuItem>
                    <MenuItem value={'year'}>Year</MenuItem>
                </TextField>
            </Stack>

            <Divider sx={{ marginBottom: 2 }} />
            <Chart {...chartData} />
        </MainCard>
    );
};

TotalRevenueGeneratedChart.propTypes = {
    chartData: PropTypes.object
};

export default TotalRevenueGeneratedChart;
