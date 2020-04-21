import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import { themeKeyLabel } from '../../utils';

let timer;

function FieldEditor({ value, themeKey, step, min, max, onChange, unit, formatter, ...props }) {
    const [localValue, setLocalValue] = useState(value);

    const endAdornment = unit ? <InputAdornment position="end">{unit}</InputAdornment> : null;

    const handleChange = useCallback((event) => {
        clearTimeout(timer);

        const newValue = formatter(event.target.value);

        setLocalValue(newValue);

        timer = setTimeout(() => {
            onChange(newValue);
        }, 50);
    }, []);

    return (
        <TextField
            {...props}
            InputProps={{
                endAdornment,
            }}
            variant="filled"
            value={localValue}
            label={themeKeyLabel(themeKey)}
            onChange={handleChange}
            inputProps={{ step, min, max }}
            fullWidth
        />
    );
}

FieldEditor.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    themeKey: PropTypes.string.isRequired,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    formatter: PropTypes.func,
    unit: PropTypes.string,
};

FieldEditor.defaultProps = {
    step: 1,
    min: -Infinity,
    max: Infinity,
    unit: '',
    formatter: (newValue) => newValue,
};

export default memo(FieldEditor);
