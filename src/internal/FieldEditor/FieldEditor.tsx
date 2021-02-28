import React, { memo, useCallback, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';

import { TUnit } from '../../types';
import { themeKeyLabel, TThemeMap } from '../../utils';

let timer: NodeJS.Timer;

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

    const handleChange = useCallback((event) => {
        clearTimeout(timer);

        const newValue: string = event.target.value;

        setLocalValue(newValue);

        timer = setTimeout(() => {
            onChange(formatter(newValue));
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

export default memo(FieldEditor);
