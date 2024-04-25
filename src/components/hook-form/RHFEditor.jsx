import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { FormHelperText } from '@mui/material';
//
import ReactQuill from 'react-quill';

// ----------------------------------------------------------------------

RHFEditor.propTypes = {
    name: PropTypes.string,
    html: PropTypes.bool
};

export default function RHFEditor({ name, html, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <ReactQuill
                    id={name}
                    value={field.value}
                    onChange={field.onChange}
                    error={!!error}
                    style={{ height: '200px', marginBottom: '50px' }}
                    helperText={
                        <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                            {error?.message}
                        </FormHelperText>
                    }
                    html={html}
                    {...other}
                />
            )}
        />
    );
}
