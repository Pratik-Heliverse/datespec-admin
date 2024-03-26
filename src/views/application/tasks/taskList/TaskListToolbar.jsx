import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Box, TextField, MenuItem } from '@mui/material';

TaskListToolbar.propTypes = {
    handleChangeFilters: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string
};

function TaskListToolbar({ handleChangeFilters, title, handleChangeTitle }) {
    return (
        <Box p={3}>
            <Stack direction={'row'} gap={2}>
                <TextField name="title" value={title} onChange={handleChangeTitle} fullWidth label={'Search'} />
                <TextField
                    name="attachments"
                    onChange={handleChangeFilters}
                    sx={{ width: 200 }}
                    select
                    label={'Attachments'}
                    defaultValue={'all'}
                >
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'present'}>Present</MenuItem>
                    <MenuItem value={'absent'}>Absent</MenuItem>
                </TextField>
                <TextField
                    name="startDate"
                    onChange={handleChangeFilters}
                    sx={{ width: 250 }}
                    label="Start Date"
                    type="date"
                    value={new Date().toISOString()}
                />
                <TextField
                    name="endDate"
                    onChange={handleChangeFilters}
                    sx={{ width: 250 }}
                    label="End Date"
                    type="date"
                    value={new Date().toISOString()}
                />
            </Stack>
        </Box>
    );
}

export default TaskListToolbar;
