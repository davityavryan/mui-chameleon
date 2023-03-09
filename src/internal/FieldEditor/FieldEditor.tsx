import React, { memo, useCallback, useEffect, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';

import { TUnit, TValue } from '../../types';

import { themeKeyLabel, toUnitless } from '../../utils';

import { UnitSet } from '../index';

let timer: number;

export type TFieldEditorProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
    value: TValue;
    defaultValue?: TValue;
    themeKey: string;
    step?: number;
    min?: number;
    max?: number;
    formatter?: (value: string) => string | number;
    unit?: TUnit;
    unitSet?: TUnit[];
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
}: TFieldEditorProps) {
    const [localValue, setLocalValue] = useState<TValue>(value);

    const handleUnitChange = (newUnit: TUnit) => {
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
            inputProps={{ step, min, max }}
            onBlur={handleBlur}
            fullWidth
        />
    );
}

export default memo(FieldEditor);
