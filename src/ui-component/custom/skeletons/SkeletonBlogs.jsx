// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

// project imports
import { gridSpacing } from 'store/constant';

// ==============================|| SKELETON - POPULAR CARD ||============================== //

const SkeletonBlogCard = () => (
    <Card>
        <CardContent>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                        <Grid item xs zeroMinWidth>
                            <Skeleton variant="rectangular" height={20} />
                        </Grid>
                        <Grid item>
                            <Skeleton variant="rectangular" height={20} width={20} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Skeleton variant="rectangular" height={150} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Skeleton variant="rectangular" height={20} />
                        </Grid>
                        <Grid item xs={6}>
                            <Skeleton variant="rectangular" height={20} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
        <CardContent sx={{ p: 1.25, display: 'flex', pt: 0, justifyContent: 'flex-end' }}>
            <Skeleton variant="circular" height={20} width={20} />
            <Skeleton variant="circular" height={20} width={20} />
        </CardContent>
    </Card>
);

export default SkeletonBlogCard;
