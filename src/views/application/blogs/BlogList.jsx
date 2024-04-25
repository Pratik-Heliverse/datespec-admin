import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { applicationRoutes } from 'menu-items/explicitRoutes';
import BlogCard from './BlogCard';

function BlogList() {
    const navigate = useNavigate();

    const handleNavigateCreateBlog = () => {
        navigate(applicationRoutes.blogs.create);
    };

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">List</Typography>

                        {/* <Stack direction={'row'} gap={1} alignItems={'center'}>
            
        </Stack> */}
                    </Grid>
                    <Grid item>
                        <Button onClick={handleNavigateCreateBlog} variant="outlined" size={'small'}>
                            <Add />
                            Create Blog
                        </Button>
                    </Grid>
                </Grid>
            }
        >
            <Grid container xs={12} md={12} spacing={gridSpacing}>
                <Grid item md={4} xs={12}>
                    <BlogCard />
                </Grid>
            </Grid>
        </MainCard>
    );
}

export default BlogList;
