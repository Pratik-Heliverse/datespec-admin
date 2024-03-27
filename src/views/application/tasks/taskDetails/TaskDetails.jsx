import React from 'react';

import PropTypes from 'prop-types';
// material-ui
import { useTheme } from '@mui/material/styles';

// import Tooltip from '@mui/material/Tooltip';
import { ThemeMode } from 'config';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack, Card, Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import Chip from 'ui-component/extended/Chip';
import SubCard from 'ui-component/cards/SubCard';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkIcon from '@mui/icons-material/Link';

// UTILS
import { fDateTime } from 'utils/formatDate';
import NoData from 'ui-component/custom/NoDataCard';

TaskDetails.propTypes = {
    taskData: PropTypes.object
};

function TaskDetails({ taskData }) {
    // const navigate = useNavigate();

    const theme = useTheme();
    const cardStyle = {
        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.50',
        border: '1px solid',
        borderColor: theme.palette.mode === ThemeMode.DARK ? 'dark.main' : 'grey.100'
    };

    return (
        <Paper>
            <Box p={3}>
                <Stack gap={3}>
                    <Card sx={{ p: 3 }} variant="outlined">
                        <Stack gap={3}>
                            <Box>
                                <Typography variant="h5" mb={1}>
                                    Task ID:
                                </Typography>
                                <Typography variant="body1">{taskData?.id}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5" mb={1}>
                                    Title:
                                </Typography>
                                <Typography variant="body1">{taskData?.title || '-'}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5" mb={1}>
                                    Description:
                                </Typography>
                                <Typography variant="body1">{taskData?.description || '-'}</Typography>
                            </Box>
                        </Stack>
                    </Card>
                    <Card sx={{ p: 2 }}>
                        <Grid container alignItems={'center'} justifyContent={'space-around'} spacing={gridSpacing}>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <Typography variant="h5">Priority</Typography>
                                    <Chip label={`${taskData?.isPriority}`} chipcolor={taskData?.isPriority ? 'success' : 'error'} />
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <Typography variant="h5">Archived</Typography>
                                    <Chip label={`${taskData?.isArchive}`} chipcolor={taskData?.isArchive ? 'success' : 'error'} />
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <Typography variant="h5">Assigned List:</Typography>
                                    {/* TODO: Due wala issue */}
                                    <Typography>{taskData?.assignedToList?.title || '-'}</Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <Typography variant="h5">Completed</Typography>
                                    <Chip label={`${taskData?.isCompleted}`} chipcolor={taskData?.isCompleted ? 'success' : 'error'} />
                                </Stack>
                            </Grid>
                            <Grid item>
                                <Stack direction={'row'} alignItems={'center'} gap={1}>
                                    <Typography variant="h5">Color</Typography>
                                    <Typography>{taskData?.color || '-'}</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Card>
                    <Grid container alignItems={'flex-start'} justifyContent={'space-between'} spacing={gridSpacing}>
                        <Grid item width="50%">
                            <SubCard title="Schedule Time">
                                <Card sx={cardStyle}>
                                    <CardContent>
                                        {taskData?.scheduleTime_id ? (
                                            <Stack direction={'row'} spacing={5}>
                                                <Stack direction="row" alignItems={'center'} spacing={1}>
                                                    <Typography variant="subtitle1">Type:</Typography>
                                                    <Typography>{taskData?.scheduleTime?.interval_type}</Typography>
                                                </Stack>
                                                <Stack direction="row" alignItems={'center'} spacing={1}>
                                                    <Typography variant="subtitle1">Value:</Typography>
                                                    <Typography>{taskData?.scheduleTime?.value}</Typography>
                                                </Stack>
                                                <Stack direction="row" alignItems={'center'} spacing={1}>
                                                    <Typography variant="subtitle1">Status:</Typography>
                                                    <Chip
                                                        chipcolor={taskData?.scheduleTime?.status ? 'success' : 'error'}
                                                        label={`${taskData?.scheduleTime?.status}`}
                                                    />
                                                </Stack>
                                            </Stack>
                                        ) : (
                                            <NoData />
                                        )}
                                    </CardContent>
                                </Card>
                            </SubCard>
                        </Grid>
                        <Grid item width="50%">
                            <SubCard title="Repeatition Details">
                                <Card sx={cardStyle}>
                                    <CardContent>
                                        {taskData?.repeat_id ? (
                                            <>
                                                <Stack direction={'row'} spacing={5} flexWrap={'wrap'}>
                                                    <Stack direction="row" alignItems={'center'} spacing={1}>
                                                        <Typography variant="subtitle1">Type:</Typography>
                                                        <Typography>{taskData?.repeat?.interval_type}</Typography>
                                                    </Stack>
                                                    <Stack direction="row" alignItems={'center'} spacing={1}>
                                                        <Typography variant="subtitle1">Value:</Typography>
                                                        <Typography>{taskData?.repeat?.value}</Typography>
                                                    </Stack>

                                                    <Stack direction="row" alignItems={'center'} spacing={1}>
                                                        <Typography variant="subtitle1">Status:</Typography>
                                                        <Chip
                                                            chipcolor={taskData?.repeat?.status ? 'success' : 'error'}
                                                            label={`${taskData?.repeat?.status}`}
                                                        />
                                                    </Stack>
                                                </Stack>
                                                <Box>
                                                    <Stack direction="row" alignItems={'center'} spacing={1}>
                                                        <Typography variant="subtitle1">Start Time:</Typography>
                                                        <Typography>{fDateTime(taskData?.repeat?.start_time)}</Typography>
                                                    </Stack>
                                                </Box>
                                            </>
                                        ) : (
                                            <NoData />
                                        )}
                                        {/* <Box>
                                            <Stack direction="row" alignItems={'center'} spacing={1}>
                                                <Typography variant="subtitle1">Frequency:</Typography>
                                                <Typography>
                                                    {(Array.isArray(taskData?.repeat?.frequency) &&
                                                        taskData?.repeat?.frequency?.reduce(
                                                            (prev, curr) => `${prev} ${prev && ','} ${fDateTime(curr)}`,
                                                            ''
                                                        )) ||
                                                        '-'}
                                                </Typography>
                                            </Stack>
                                        </Box> */}
                                    </CardContent>
                                </Card>
                            </SubCard>
                        </Grid>
                    </Grid>
                    <Card>
                        <SubCard title={'Attachments'}>
                            {Array.isArray(taskData?.attachments) && taskData?.attachments?.length > 0 ? (
                                <List component="nav" aria-label="main mailbox folders">
                                    {taskData?.attachments?.map((ele, index) => (
                                        <ListItemButton
                                            key={ele?.title + index}
                                            href={ele?.link || '#'}
                                            target="_blank"
                                            referrerPolicy="noreferrer"
                                        >
                                            <ListItemText primary={ele?.title || '-'} secondary={ele?.type || '-'} />
                                            <ListItemIcon>
                                                <LinkIcon sx={{ fontSize: '1.3rem' }} />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    ))}
                                </List>
                            ) : (
                                <NoData head="No attachments found" />
                            )}
                        </SubCard>
                    </Card>
                </Stack>
            </Box>
        </Paper>
    );
}

export default TaskDetails;
