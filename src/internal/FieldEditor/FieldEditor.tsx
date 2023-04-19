import React, { useCallback, useEffect, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { toUnitless } from '@mui/material/styles/cssUtils';

import { Unit, Value } from '../../types';

import { themeKeyLabel } from '../../utils/themeKeyLabel';

import UnitSet from '../UnitSet/UnitSet';

let timer: NodeJS.Timeout;

export type FieldEditorProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    value: Value;
    defaultValue?: Value;
    themeKey: string;
    step?: number;
    min?: number;
    max?: number;
    formatter?: (value: string) => string | number;
    unit?: Unit;
    unitSet?: Unit[];
    onChange: (newValue: string | number) => void;
};

function FieldEditor({
    value,
    defaultValue,
    themeKey,
    step = 1,
    min = -Infinity,
    max = Infinity,
    onChange,
    unit,
    unitSet,
    formatter = (newValue) => newValue,
    ...props
}: FieldEditorProps) {
    const [localValue, setLocalValue] = useState<Value>(value);

    const handleUnitChange = (newUnit: Unit) => {
        const newValue = value ? `${toUnitless(value)}${newUnit}` : '';

        timer = setTimeout(() => {
            onChange(formatter(newValue));
        }, 50);
    };

    const endAdornment = unit ? (
        <InputAdornment position="end">
            <UnitSet unit={unit} units={unitSet} onChange={handleUnitChange} />
        </InputAdornment>
    ) : null;

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
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

    const handleBlur = () => {
        if (value === '') {
            onChange(formatter(defaultValue));
        }
    };

    useEffect(() => {
        // Update localValue if value is changed from outside(ex. reset)
        if (value !== localValue) {
            setLocalValue(value as string);
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
            onBlur={handleBlur}
            inputProps={{ step, min, max }}
            fullWidth
        />
    );
}

export default FieldEditor;
