import React from 'react';
import PropType from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Box, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from '@mui/lab';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

AddEditBlog.propTypes = {
    edit: PropType.bool
};

function AddEditBlog({ edit = false }) {
    const initialValues = {
        title: '',
        body: '',
        readingTime: 0,
        featuredImage: '',
        category: 'HEALTH',
        description: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        body: Yup.string().required(),
        readingTime: Yup.number().required(),
        featuredImage: Yup.string().required(),
        category: Yup.string().required(),
        description: Yup.string().required()
    });

    const onSubmit = async (values) => {
        console.log({ values });
    };

    const { handleSubmit, values, handleChange, errors } = useFormik({
        onSubmit,
        validationSchema,
        initialValues
    });

    console.log({ errors, values });

    return (
        <MainCard title={<Typography>{edit ? 'Edit' : 'Create a new'} blog</Typography>}>
            <Box>
                <form onSubmit={handleSubmit}>
                    <TextField name="title" onChange={handleChange} error={!!errors.title} helperText={errors?.title} />
                    <TextField name="body" onChange={handleChange} error={!!errors.body} helperText={errors?.body} />
                    <ReactQuill name={'body'} theme="snow" onChange={handleChange} />
                    <LoadingButton type="submit">Submit</LoadingButton>
                </form>
            </Box>
        </MainCard>
    );
}

export default AddEditBlog;
