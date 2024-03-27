import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Box, TextField, MenuItem } from '@mui/material';

TaskListToolbar.propTypes = {
    handleChangeFilters: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
    filters: PropTypes.object
};

function TaskListToolbar({ handleChangeFilters, title, handleChangeTitle, filters }) {
    return (
        <Box p={3}>
            <Stack direction={'row'} gap={2}>
                <TextField name="title" value={title} onChange={handleChangeTitle} fullWidth label={'Search'} />
                <TextField
                    name="attachment"
                    onChange={handleChangeFilters}
                    sx={{ width: 200 }}
                    select
                    label={'Attachments'}
                    value={filters.attachment}
                >
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={true}>Present</MenuItem>
                    <MenuItem value={false}>Absent</MenuItem>
                </TextField>
                <TextField
                    name="from"
                    onChange={handleChangeFilters}
                    sx={{ width: 250 }}
                    label="Due Date From"
                    type="datetime-local"
                    value={filters.from || new Date().toISOString()}
                />
                <TextField
                    name="to"
                    onChange={handleChangeFilters}
                    sx={{ width: 250 }}
                    label="Due Date Till"
                    type="datetime-local"
                    value={filters.to || new Date().toISOString()}
                />
            </Stack>
        </Box>
    );
}

export default TaskListToolbar;
