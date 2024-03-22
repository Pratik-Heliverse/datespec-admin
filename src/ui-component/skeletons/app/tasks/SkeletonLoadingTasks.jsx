import React from 'react';

// material-ui

// import Tooltip from '@mui/material/Tooltip';
import { Box, Paper, Stack, Card, Grid, Skeleton } from '@mui/material';
import { gridSpacing } from 'store/constant';

function SkeletonLoadingTask() {
    // const theme = useTheme
    // const navigate = useNavigate();

    // const handleNavigate = (id) => {
    //     navigate(applicationRoutes.tasks.view(id));
    // };

    return (
        <Paper>
            <Box p={3}>
                <Stack gap={3}>
                    <Card sx={{ p: 3 }} variant="outlined">
                        <Box>
                            <Skeleton variant="text" width={'60%'} />
                            <Skeleton variant="text" />
                        </Box>
                        <Box mt={3}>
                            <Skeleton variant="text" width={'60%'} />
                            <Skeleton variant="text" />
                        </Box>
                    </Card>
                    <Card sx={{ p: 2 }}>
                        <Skeleton variant="rounded" height={60} />
                    </Card>
                    <Grid container alignItems={'flex-start'} justifyContent={'space-between'} spacing={gridSpacing}>
                        <Grid item width="50%">
                            <Skeleton variant="rounded" height={150} />
                        </Grid>
                        <Grid item width="50%">
                            <Skeleton variant="rounded" height={150} />
                        </Grid>
                    </Grid>
                    <Card>
                        <Skeleton variant="rectangular" height={100} />
                    </Card>
                </Stack>
            </Box>
        </Paper>
    );
}

export default SkeletonLoadingTask;
