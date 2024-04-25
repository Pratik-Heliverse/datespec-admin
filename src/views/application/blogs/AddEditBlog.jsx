import React from 'react';
import PropType from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';
import { Typography } from '@mui/material';

AddEditBlog.propTypes = {
    edit: PropType.bool
};

function AddEditBlog({ edit = false }) {
    return <MainCard title={<Typography>{edit ? 'Edit' : 'Create a new'} blog</Typography>}></MainCard>;
}

export default AddEditBlog;
