import React, { memo, useCallback, useContext, useEffect, useState } from 'react';

import { InputAdornment, TextField, TextFieldProps } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';

import { TUnit, TValue } from '../../types';

import { Context, makeConvertValueFromUnitToUnit, themeKeyLabel, toUnitless } from '../../utils';

import { UnitSet } from '../index';

let timer: number;

export type TFieldEditorProps = Omit<TextFieldProps, 'onChange'> & {
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
    const { state } = useContext(Context);
    const { typography } = createMuiTheme(state.theme);

    const convertValueFromUnitToUnit = makeConvertValueFromUnitToUnit(typography.fontSize);

    const handleUnitChange = (newUnit: TUnit) => {
        const newValue = convertValueFromUnitToUnit(localValue, unit, newUnit);

        timer = setTimeout(() => {
            setLocalValue(toUnitless(newValue));
            onChange(newValue);
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

    useEffect(() => {
        // Update localValue if value is changed from outside(ex. reset)
        if (timer === null && value !== localValue) {
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
            fullWidth
        />
    );
}

export default memo(FieldEditor);
