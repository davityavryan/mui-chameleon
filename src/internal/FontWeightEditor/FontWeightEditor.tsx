import React, { CSSProperties, memo, useCallback, useEffect, useState } from 'react';

import { Property } from 'csstype';

import { Box, TextField, TextFieldProps } from '@material-ui/core';
import { capitalize } from '@material-ui/core/utils';

import { Autocomplete, createFilterOptions } from '@material-ui/lab';

import { themeKeyLabel } from '../../utils';

import useStyles from './FontWeightEditor.style';

type TFontWeight = CSSProperties['fontWeight'];

type TProps = TextFieldProps & {
    value: TFontWeight;
    themeKey: string;
};

type TFontWeightValue = {
    inputValue?: string;
    value?: TFontWeight;
};

const fontWeightValues: TFontWeightValue[] = [
    { value: 'lighter' },
    { value: 100 },
    { value: 200 },
    { value: 300 },
    { value: 400 },
    { value: 'normal' },
    { value: 500 },
    { value: 600 },
    { value: 700 },
    { value: 'bold' },
    { value: 800 },
    { value: 900 },
    { value: 'bolder' },
    { value: 'initial' },
    { value: 'inherit' },
    { value: 'unset' },
];

let timer: number;

const filter = createFilterOptions<TFontWeightValue>();

function FontWeightEditor({ value, onChange, themeKey }: TProps) {
    const [localValue, setLocalValue] = useState<TFontWeight | null>(value);

    const [errorMessage, setErrorMessage] = useState<string>('');
    const classes = useStyles();

    const isValidValue = useCallback((value: string): boolean => {
        const valueIsNumber = Number.parseInt(value);

        if (valueIsNumber) {
            if (valueIsNumber < 0 || valueIsNumber > 1000) {
                setErrorMessage('Please enter numbers in this range [1,1000]');
                return false;
            }
        } else {
            if (!fontWeightValues.some((item) => item.value === value)) {
                setErrorMessage('Please enter valid font weight value');
                return false;
            }
        }

        return true;
    }, []);

    const handleChange = useCallback(
        (event, newValue) => {
            setErrorMessage('');

            if (typeof newValue === 'string') {
                if (isValidValue(newValue)) {
                    handleChangeValue(newValue);
                }
            } else if (newValue?.inputValue) {
                if (isValidValue(newValue.inputValue)) {
                    // Create a new value from the user input
                    handleChangeValue(newValue.inputValue);
                }
            } else {
                if (!newValue?.value) {
                    return;
                }

                if (isValidValue(newValue.value)) {
                    handleChangeValue(newValue.value);
                }
            }
        },
        [onChange, isValidValue]
    );

    const handleChangeValue = useCallback(
        (fontWeight) => {
            clearTimeout(timer);
            timer = null;

            timer = setTimeout(() => {
                timer = null;
                onChange(fontWeight);
            }, 50);

            setLocalValue(fontWeight);
        },
        [onChange]
    );

    useEffect(() => {
        // Update localValue if value is changed from outside(ex. reset)
        if (timer === null && value !== localValue) {
            setLocalValue(value);
        }
    }, [value]);

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <Autocomplete
            classes={{ popper: classes.popper }}
            value={{ value: localValue }}
            options={fontWeightValues}
            onChange={handleChange}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                // Suggest the creation of a new value
                if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: `Add "${params.inputValue}"`,
                        value: params.inputValue as TFontWeight,
                    });
                }

                return filtered;
            }}
            getOptionLabel={(option) => option.inputValue ?? String(option.value)}
            renderOption={(option) => {
                const fontWeight = option.inputValue ?? String(option.value);

                return (
                    <Box style={{ fontWeight } as { fontWeight: Property.FontWeight }}>{capitalize(fontWeight)}</Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={themeKeyLabel(themeKey)}
                    variant="filled"
                    helperText={errorMessage}
                    error={Boolean(errorMessage)}
                />
            )}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            freeSolo
            fullWidth
        />
    );
}

export default memo(FontWeightEditor);
