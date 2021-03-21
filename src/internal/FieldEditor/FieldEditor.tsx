import React, { memo, useCallback, useEffect, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';

import { TUnit } from '../../types';
import { themeKeyLabel, TThemeMap } from '../../utils';

let timer: number;

type TProps = TextFieldProps & {
    themeKey: keyof TThemeMap;
    step?: number;
    min?: number;
    max?: number;
    formatter?: (value: string) => any;
    unit?: TUnit;
};

function FieldEditor({
    value,
    themeKey,
    step = 1,
    min = -Infinity,
    max = Infinity,
    onChange,
    unit,
    formatter = (newValue) => newValue,
    ...props
}: TProps) {
    const [localValue, setLocalValue] = useState(value);

    const endAdornment = unit ? <InputAdornment position="end">{unit}</InputAdornment> : null;

    const handleChange = useCallback(
        (event) => {
            clearTimeout(timer);
            timer = null;

            const newValue: string = event.target.value;

            timer = setTimeout(() => {
                timer = null;
                onChange(formatter(newValue));
            }, 50);

            setLocalValue(newValue);
        },
        [onChange, formatter]
    );

    useEffect(() => {
        // Update localValue if value is changed from outside(ex. reset)
        if (timer === null && value !== localValue) {
            setLocalValue(value);
        }
    }, [value, localValue]);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
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

export default memo(FieldEditor);
