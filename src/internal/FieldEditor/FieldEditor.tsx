import React, { memo, useCallback, useEffect, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';

import { TUnit } from '../../types';
import { themeKeyLabel } from '../../utils';

let timer: number;

export type TFieldEditorProps = Omit<TextFieldProps, 'onChange'> & {
    themeKey: string;
    step?: number;
    min?: number;
    max?: number;
    formatter?: (value: string) => string | number;
    unit?: TUnit;
    onChange: (newValue: string | number) => void;
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
}: TFieldEditorProps) {
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
