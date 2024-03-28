import React from 'react';
import { Typography, Card, Grid, Stack, Skeleton } from '@mui/material';
import { gridSpacing } from 'store/constant';

function SkeletonLoadingTaskAnalytics() {
    return (
        <Card>
            <Grid container justifyContent={'space-between'}>
                <Grid item>
                    <Typography variant="h2">Activity </Typography>
                    <Typography variant="subtitle2" mt={1}>
                        Activity of user in last 4 weeks
                    </Typography>
                </Grid>
                <Grid item md={1} xs={3}>
                    <Skeleton height={50} />
                </Grid>
            </Grid>
            <Grid container spacing={gridSpacing}>
                <Grid item md={8} xs={12}>
                    <Skeleton height={360} variant="rounded" />
                </Grid>
                <Grid item md={4} xs={12} spacing={1}>
                    <Stack gap={2} fullWidth>
                        <Card variant="outlined" width={'100%'}>
                            <Skeleton height={110} variant="rectangular" />
                        </Card>
                        <Card variant="outlined" width={'100%'}>
                            <Skeleton height={110} variant="rectangular" />
                        </Card>
                        <Card variant="outlined" width={'100%'}>
                            <Skeleton height={110} variant="rectangular" />
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SkeletonLoadingTaskAnalytics;
