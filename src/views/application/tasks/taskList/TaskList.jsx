import React from 'react';

// Router imports
import { useNavigate } from 'react-router-dom';
import { applicationRoutes } from 'menu-items/explicitRoutes';

import PropTypes from 'prop-types';
// material-ui
// import {  useTheme } from '@mui/material/styles';
import Chip from 'ui-component/extended/Chip';
// import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SkeletonTotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
// import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
// import BlockTwoToneIcon from '@mui/icons-material/BlockTwoTone';

// ==============================|| USER LIST 1 ||============================== //

const tableHead = [
    { id: '#', title: '#', sx: { pl: 3, width: 50 } },
    { id: 'title', title: 'Title' },

    { id: 'attachments', title: 'Attachments', sx: { width: 150 }, align: 'center' },
    { id: 'Repeat', title: 'Repeat', sx: { width: 150 }, align: 'center' },
    { id: 'Schedule', title: 'Scheduled', sx: { width: 150 }, align: 'center' },
    { id: 'archived', sx: { width: 150 }, align: 'center', title: 'Archived' },
    { id: 'priority', sx: { width: 150 }, align: 'center', title: 'Priority' },
    { id: 'completed', title: 'Status', sx: { width: 150 }, align: 'center' },
    { id: 'assigned_to_list', title: 'Assigned List', sx: { width: 150 }, align: 'center' },
    { id: 'actions', title: 'Actions', sx: { width: 200 }, align: 'center' }
];

TaskListTable.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    rowsPerPage: PropTypes.number
};

function TaskListTable({ data = [], isLoading, rowsPerPage }) {
    const navigate = useNavigate();

    const handleNavigate = (taskId) => {
        navigate(applicationRoutes.tasks.details(taskId));
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableHead.map((ele) => (
                            <TableCell key={ele.id} sx={{ ...ele?.sx }} align={ele?.align}>
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
                                    <TableCell sx={tableHead[0]?.sx} align={tableHead[0]?.align}>
                                        {index + 1}.
                                    </TableCell>
                                    <TableCell sx={tableHead[1]?.sx} align={tableHead[1]?.align}>
                                        <Typography>{row?.title || '-'}</Typography>
                                    </TableCell>
                                    <TableCell sx={tableHead[2]?.sx} align={tableHead[2]?.align}>
                                        {row?._count?.attachments ?? '-'}
                                    </TableCell>
                                    <TableCell sx={tableHead[3]?.sx} align={tableHead[3]?.align}>
                                        <Chip
                                            label={row?.repeat_id ? 'Enabled' : 'Disabled'}
                                            chipcolor={row?.repeat_id ? 'success' : 'error'}
                                            // variant={'outlined'}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableHead[3]?.sx} align={tableHead[3]?.align}>
                                        <Chip
                                            label={row?.scheduleTime_id ? 'Enabled' : 'Disabled'}
                                            chipcolor={row?.scheduleTime_id ? 'success' : 'error'}
                                            // variant={'outlined'}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableHead[4]?.sx} align={tableHead[4]?.align}>
                                        {/* <Chip label="Completed" chipcolor="success" /> */}
                                        {/* <Chip label="Missed" chipcolor="error" /> */}
                                        <Chip
                                            label={`${row?.isArchive}`}
                                            chipcolor={row?.isArchived ? 'success' : 'error'}
                                            variant={'outlined'}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableHead[4]?.sx} align={tableHead[4]?.align}>
                                        {/* <Chip label="Completed" chipcolor="success" /> */}
                                        {/* <Chip label="Missed" chipcolor="error" /> */}
                                        <Chip
                                            label={`${row?.isPriority}`}
                                            chipcolor={row?.isPriority ? 'success' : 'error'}
                                            variant={'outlined'}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableHead[4]?.sx} align={tableHead[4]?.align}>
                                        {/* <Chip label="Completed" chipcolor="success" /> */}
                                        {/* <Chip label="Missed" chipcolor="error" /> */}
                                        <Chip
                                            label={row?.isCompleted ? 'Completed' : 'Pending'}
                                            chipcolor={row?.isCompleted ? 'success' : 'default'}
                                        />
                                    </TableCell>
                                    <TableCell sx={tableHead[5]?.sx} align={tableHead[5]?.align}>
                                        <Typography>{row?.assignedToList?.title ?? ''}</Typography>
                                    </TableCell>
                                    <TableCell sx={tableHead[6]?.sx} align={tableHead[6]?.align}>
                                        <Button
                                            onClick={() => {
                                                handleNavigate(row?.id);
                                            }}
                                            size="small"
                                            variant="outlined"
                                            color="secondary"
                                        >
                                            Details {'>'}
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

export default TaskListTable;
