import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Stack, IconButton } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import Card1 from 'assets/images/cards/card-1.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { applicationRoutes } from 'menu-items/explicitRoutes';
import { ThemeMode } from 'config';
import { useTheme } from '@mui/system';
import { dispatch } from 'store';
import { blogActions } from 'store/slices/blogs';

BlogCard.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number
};

function BlogCard({ data, index }) {
    const theme = useTheme();
    const navigate = useNavigate();
    const { deleteBlog } = blogActions;

    const handleEditBlog = (id) => {
        navigate(applicationRoutes.blogs.edit(id));
    };

    const handleDeleteBlog = async () => {
        dispatch(deleteBlog(data?.id));
    };

    const cardStyle = {
        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50',
        border: '1px solid',
        borderColor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.100'
    };

    return (
        <SubCard title={`Blog #${index + 1}`}>
            <Card sx={cardStyle}>
                <CardMedia component="img" image={!data?.featuredImage ? Card1 : null} src={data?.featuredImage} title="Card 1" />
                <CardContent>
                    <Grid container spacing={1} alignItems="flex-start" flexDirection={'column'}>
                        <Grid item>
                            <Typography variant="subtitle1">{data?.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">{data?.description}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant="caption">{data?.readingTime} min read</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction={'row'} gap={1}>
                                <IconButton
                                    color="secondary"
                                    onClick={() => {
                                        handleEditBlog(data?.id);
                                    }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={handleDeleteBlog} color="error">
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </SubCard>
    );
}

export default BlogCard;
