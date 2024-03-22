import React from 'react';

// Router imports
import { useNavigate } from 'react-router-dom';
import { applicationRoutes } from 'menu-items/explicitRoutes';

import PropTypes from 'prop-types';
// material-ui
// import {  useTheme } from '@mui/material/styles';
import Chip from 'ui-component/extended/Chip';
// import IconButton from '@mui/material/IconButton';
import { Grid, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SkeletonTotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// project imports
import Avatar from 'ui-component/extended/Avatar';
// import { ThemeMode } from 'config';

import { ImagePath, getImageUrl } from 'utils/getImageUrl';

// assets
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
// import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';

// ==============================|| USER LIST 1 ||============================== //

const tableHead = [
    { id: 'id', title: 'Id', sx: { pl: 3 } },
    { id: 'user_profile', title: 'User Profile' },
    { id: 'tasks', title: 'Total Tasks' },
    { id: 'premium_status', title: 'Membership' },
    { id: 'actions', title: 'Actions' }
];

TasksUserList.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    rowsPerPage: PropTypes.number
};

function TasksUserList({ data = [], isLoading, rowsPerPage }) {
    // const theme = useTheme
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(applicationRoutes.tasks.view(id));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHead.map((ele) => (
                            <TableCell key={ele.id} sx={{ ...ele.sx }}>
                                {ele.title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                {isLoading ? (
                    <TableBody>
                        {Array.from(Array(rowsPerPage)).map((ele, index) => (
                            <TableRow key={index}>
                                <TableCell colSpan={tableHead.length}>
                                    <SkeletonTotalIncomeCard />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                ) : (
                    <TableBody>
                        {data &&
                            data.map((row, index) => (
                                <TableRow hover key={index}>
                                    <TableCell sx={{ pl: 3 }}>{row?.id}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Avatar alt="User 1" src={getImageUrl(`${row?.image}`, ImagePath.USERS)} />
                                            <Stack>
                                                <Stack direction="row" alignItems="center" spacing={0.25}>
                                                    <Typography variant="subtitle1">{row?.full_name}</Typography>
                                                    {/* {row?.status === 'Active' && (
                                                        <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />
                                                    )} */}
                                                </Stack>
                                                <Typography variant="subtitle2" noWrap>
                                                    {row?.email}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell>{row?._count?.tasks}</TableCell>
                                    <TableCell>
                                        <Grid item>
                                            <Chip label="Default" chipcolor="default" />
                                            {/* <Chip label="Secondary" chipcolor="secondary" /> */}
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => {
                                                handleNavigate(row?.id);
                                            }}
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            View {'>'}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    );
}

export default TasksUserList;
