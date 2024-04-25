import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { Grid, Typography, Button } from '@mui/material';
import { applicationRoutes } from 'menu-items/explicitRoutes';
import BlogCard from './BlogCard';
import { useSelector } from 'store';
import SkeletonBlogCard from 'ui-component/custom/skeletons/SkeletonBlogs';

function BlogList() {
    const navigate = useNavigate();

    const { isLoading, blogs = [] } = useSelector((state) => state.blogs);

    const handleNavigateCreateBlog = () => {
        navigate(applicationRoutes.blogs.create);
    };

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">List</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleNavigateCreateBlog} variant="outlined" size={'large'}>
                            <Typography> Create Blog</Typography>
                            {/* <Stack direction={'row'} gap={1} alignItems={'center'}>
                            </Stack> */}
                        </Button>
                    </Grid>
                </Grid>
            }
        >
            <Grid container xs={12} md={12} spacing={gridSpacing}>
                {isLoading ? (
                    <>
                        {[...Array(5)].map((ele, index) => (
                            <Grid key={ele?.id || index} item md={4} xs={12}>
                                <SkeletonBlogCard />
                            </Grid>
                        ))}
                    </>
                ) : (
                    <>
                        {blogs?.map((blog, index) => (
                            <Grid key={blog?.id || index} item md={4} xs={12}>
                                <BlogCard data={blog} index={index} />
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
        </MainCard>
    );
}

export default BlogList;
