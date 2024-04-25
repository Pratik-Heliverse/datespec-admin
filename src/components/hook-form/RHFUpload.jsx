import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';

// type
import { UploadAvatar, UploadSingleFile } from '../upload';

// ----------------------------------------------------------------------

RHFUploadAvatar.propTypes = {
    name: PropTypes.string
};

export function RHFUploadAvatar({ name, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const checkError = !!error && !field.value;

                return (
                    <div>
                        <UploadAvatar accept={{ 'image/*': [] }} error={checkError} {...other} file={field.value} />
                        {checkError && (
                            <FormHelperText error sx={{ px: 2, textAlign: 'center' }}>
                                {error.message}
                            </FormHelperText>
                        )}
                    </div>
                );
            }}
        />
    );
}

// ----------------------------------------------------------------------

RHFUploadSingleFile.propTypes = {
    name: PropTypes.string
};

export default function RHFUploadSingleFile({ name, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                // console.log(field);
                const checkError = !!error && !field.value;
                // console.log(field);

                return (
                    <UploadSingleFile
                        accept={{ 'image/*': [] }}
                        file={field.value}
                        error={checkError}
                        helperText={
                            checkError && (
                                <FormHelperText error sx={{ px: 2 }}>
                                    {error.message}
                                </FormHelperText>
                            )
                        }
                        {...other}
                    />
                );
            }}
        />
    );
}
