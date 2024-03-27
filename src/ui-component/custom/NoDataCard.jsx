import React from 'react';
import PropTypes from 'prop-types';
import { Card, Stack, Box, CardContent, Grid, Typography, TableBody, TableCell } from '@mui/material';
import noDataImage from 'assets/images/illustrations/illustration_empty_content.svg';

TableWrapper.propTypes = {
    children: PropTypes.any,
    colSpan: PropTypes.number
};

function TableWrapper({ children, colSpan }) {
    return (
        <TableBody sx={{ width: '100%' }}>
            <TableCell width={'100%'} colSpan={colSpan}>
                {children}
            </TableCell>
        </TableBody>
    );
}

NoData.propTypes = {
    img: PropTypes.string,
    head: PropTypes.string,
    subHead: PropTypes.string,
    colSpan: PropTypes.number
};

function NoData({ head = 'No Data Available', subHead, colSpan }) {
    return colSpan ? (
        <TableWrapper colSpan={colSpan}>
            <Card>
                <CardContent>
                    <Grid container flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                        <Grid item>
                            <Box>
                                <img src={noDataImage} alt={'nodata.jpg'} />
                            </Box>
                        </Grid>
                        <Grid item mt={2}>
                            <Stack>
                                <Typography variant="h3" color={'secondary'}>
                                    {head}
                                </Typography>
                                {subHead && <Typography variant="subitle2">{subHead}</Typography>}
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </TableWrapper>
    ) : (
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
