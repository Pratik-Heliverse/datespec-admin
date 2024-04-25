import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Switch, FormControlLabel } from '@mui/material';

// ----------------------------------------------------------------------

RHFSwitch.propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool
};

export default function RHFSwitch({ name, disabled = false, ...other }) {
    const { control } = useFormContext();

    return (
        <FormControlLabel
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => <Switch {...field} disabled={disabled} checked={field.value} />}
                />
            }
            disabled={disabled}
            {...other}
        />
    );
}
