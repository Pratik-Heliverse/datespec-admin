import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Stack, IconButton } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import Card1 from 'assets/images/cards/card-1.jpg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { applicationRoutes } from 'menu-items/explicitRoutes';
import { ThemeMode } from 'config';
import { useTheme } from '@mui/system';

function BlogCard() {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleEditBlog = (id) => {
        navigate(applicationRoutes.blogs.edit(id));
    };

    const cardStyle = {
        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50',
        border: '1px solid',
        borderColor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.100'
    };

    return (
        <SubCard title="Image Cap">
            <Card sx={cardStyle}>
                <CardMedia component="img" image={Card1} title="Card 1" />
                <CardContent>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <Typography variant="subtitle1">Special title</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                With supporting text below as a natural lead-in to additional content.
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item>
                            <Typography variant="caption">Last updated 3 mins ago</Typography>
                        </Grid>
                        <Grid item>
                            <Stack direction={'row'} gap={1}>
                                <IconButton
                                    color="secondary"
                                    onClick={() => {
                                        handleEditBlog('Some_id');
                                    }}
                                >
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error">
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
