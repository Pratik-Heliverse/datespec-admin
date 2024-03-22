import React from 'react';
import PropTypes from 'prop-types';
import { Card, Stack, Box, CardContent, Grid, Typography } from '@mui/material';

NoData.propTypes = {
    img: PropTypes.string,
    head: PropTypes.string,
    subHead: PropTypes.string
};

function NoData({ head = 'No Data', subHead }) {
    return (
        <Card>
            <CardContent>
                <Grid container justifyContent={'center'} alignItems={'center'}>
                    <Grid item>
                        <Box>{/* <img src={} alt={"img.jpg"}/> */}</Box>
                    </Grid>
                    <Grid item>
                        <Stack>
                            <Typography variant="h5">{head}</Typography>
                            {subHead && <Typography variant="subitle2">{subHead}</Typography>}
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default NoData;
