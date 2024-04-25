import React from 'react';
import PropType from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Box, Card, Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { LoadingButton } from '@mui/lab';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormProvider, RHFTextField, RHFEditor, RHFSwitch } from 'components/hook-form';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import RHFUploadSingleFile from 'components/hook-form/RHFUpload';
import { gridSpacing } from 'store/constant';

AddEditBlog.propTypes = {
    edit: PropType.bool
};

function AddEditBlog({ edit = false }) {
    const defaultValues = {
        title: '',
        body: '',
        readingTime: 0,
        featuredImage: '',
        category: 'HEALTH',
        description: '',
        status: '',
        isFeatured: ''
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        body: Yup.string().required(),
        readingTime: Yup.number().required(),
        featuredImage: Yup.string().required('Image is required'),
        category: Yup.string().required(),
        description: Yup.string().required(),
        status: Yup.string().required(),
        isFeatured: Yup.string().required()
    });

    const onSubmit = async (data) => {
        console.log({ data });
    };

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema)
    });
    const {
        handleSubmit,
        formState: { errors, isSubmitting }
    } = methods;

    console.log({ errors });

    return (
        <MainCard title={<Typography>{edit ? 'Edit' : 'Create a new'} blog</Typography>}>
            <Box>
                {/* <form onSubmit={handleSubmit}>
                    <TextField name="title" onChange={handleChange} error={!!errors.title} helperText={errors?.title} />
                    <TextField name="body" onChange={handleChange} error={!!errors.body} helperText={errors?.body} />
                    <ReactQuill name={'body'} theme="snow" onChange={handleChange} />
                    <LoadingButton type="submit">Submit</LoadingButton>
                </form> */}
                <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <Stack direction={'column'} gap={gridSpacing}>
                        <Box mb={2}>
                            <Card variant="outlined">
                                <RHFUploadSingleFile name="feature_image" onDrop={() => {}} onRemove={() => {}} />
                            </Card>
                            {errors.featuredImage && (
                                <Typography variant="caption" color={'error'}>
                                    {errors.featuredImage.message}
                                </Typography>
                            )}
                        </Box>
                        <RHFTextField name={'title'} label={'Title'} />
                        <RHFTextField name={'description'} label={'Description'} />
                        <RHFTextField name={'reacingTime'} label={'Reading Time'} type={'number'} />
                        <Box>
                            <RHFEditor name={'body'} label={'Body'} />
                            {errors.body && (
                                <Typography variant="caption" color={'error'}>
                                    {errors.body.message}
                                </Typography>
                            )}
                        </Box>

                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={gridSpacing} justifyContent={'flex-start'}>
                                <RHFSwitch name={'isFeatured'} label={'Featured'} />
                                <RHFSwitch name={'status'} label={'Active'} />
                            </Stack>
                            <Stack direction={'row'} spacing={gridSpacing} justifyContent={'flex-end'}>
                                <LoadingButton type={'submit'} loading={isSubmitting}>
                                    Submit
                                </LoadingButton>
                                <LoadingButton type={'submit'} loading={isSubmitting}>
                                    Submit
                                </LoadingButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </FormProvider>
            </Box>
        </MainCard>
    );
}

export default AddEditBlog;
