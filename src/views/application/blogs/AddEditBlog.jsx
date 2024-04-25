import React, { useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropType from 'prop-types';
import MainCard from 'ui-component/cards/MainCard';
import { Typography, Box, Card, Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'react-quill/dist/quill.snow.css';
import { FormProvider, RHFTextField, RHFEditor, RHFSwitch } from 'components/hook-form';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import RHFUploadSingleFile from 'components/hook-form/RHFUpload';
import { gridSpacing } from 'store/constant';
import { handleFirebaseUpload } from 'utils/fileUpload';
import { useSelector } from 'store';
import { dispatch } from 'store';
import { blogActions } from 'store/slices/blogs';
import { applicationRoutes } from 'menu-items/explicitRoutes';

AddEditBlog.propTypes = {
    edit: PropType.bool
};

function AddEditBlog({ edit = false }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const { createBlog, updateBlog } = blogActions;
    const { blogs = [] } = useSelector((state) => state.blogs);

    const seletedBlog = blogs.find((blog) => blog?.id === id);

    const [featuredImage, setFeaturedImage] = useState();

    const defaultValues = useMemo(
        () => ({
            title: seletedBlog?.title || '',
            body: seletedBlog?.body || '',
            readingTime: seletedBlog?.readingTime || 0,
            featuredImage: seletedBlog?.featuredImage || '',
            category: seletedBlog?.category || 'HEALTH',
            description: seletedBlog?.description || '',
            status: seletedBlog?.status || false,
            isFeatured: seletedBlog?.isFeatured || false
        }),
        [id, seletedBlog]
    );

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

    const handleImageDrop = (files) => {
        if (Array.isArray(files) && files[0]) {
            setFeaturedImage(files[0]);
            setValue('featuredImage', URL.createObjectURL(files[0]));
        }
    };

    const uploadImage = async () => {
        try {
            if (featuredImage) {
                const res = await handleFirebaseUpload({ file: featuredImage });
                setValue('featuredImage', res);
                return res;
            }
            return null;
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = () => {
        navigate(applicationRoutes.blogs.list);
    };

    const onSubmit = async (data) => {
        try {
            // TODO: Make the BE to accept these values as well for creating and editing the blog.
            delete data?.isFeatured;
            delete data?.status;

            const link = await uploadImage();
            if (!edit) {
                const res = await dispatch(createBlog({ ...data, featuredImage: link ?? data?.featuredImage }));
                if (res.payload?.status === 201) {
                    navigate(applicationRoutes.blogs.list);
                }
            } else {
                const res = await dispatch(updateBlog({ ...data, featuredImage: link ?? data?.featuredImage, id }));
                if (res.payload?.status === 200) {
                    navigate(applicationRoutes.blogs.list);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const methods = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema)
    });
    const {
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting }
    } = methods;

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
                                <RHFUploadSingleFile name="featuredImage" onDrop={handleImageDrop} onRemove={() => {}} />
                            </Card>
                            {errors.featuredImage && (
                                <Typography variant="caption" color={'error'}>
                                    {errors.featuredImage.message}
                                </Typography>
                            )}
                        </Box>
                        <RHFTextField name={'title'} label={'Title'} />
                        <RHFTextField name={'description'} label={'Description'} />
                        <RHFTextField name={'readingTime'} label={'Reading Time'} type={'number'} />
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
                                <LoadingButton type={'submit'} variant="outlined" loading={isSubmitting}>
                                    {edit ? 'Edit' : 'Submit'}
                                </LoadingButton>
                                <LoadingButton onClick={handleCancel} color="error" variant="outlined" type={'submit'}>
                                    Cancel
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
