import React, { CSSProperties, useCallback, useEffect, useState } from 'react';

import {
    Autocomplete,
    TextField,
    TextFieldProps,
    capitalize,
    createFilterOptions,
    UseAutocompleteProps,
} from '@mui/material';

import { themeKeyLabel } from '../../utils/themeKeyLabel';

type FontWeight = CSSProperties['fontWeight'];

type Props = TextFieldProps & {
    value: FontWeight;
    themeKey: string;
    onChange: (newValue: FontWeight) => void;
};

type FontWeightValue = {
    inputValue?: string;
    value?: FontWeight;
};

const fontWeightValues: readonly FontWeightValue[] = [
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

let timer: NodeJS.Timeout;

const filter = createFilterOptions<FontWeightValue>();

type ValueType = NonNullable<string | FontWeightValue>;

function FontWeightEditor({ value, onChange, themeKey }: Props) {
    const [localValue, setLocalValue] = useState<FontWeight | null>(value);

    const [errorMessage, setErrorMessage] = useState<string>('');

    const isValidValue = useCallback((value: FontWeight): boolean => {
        const valueAsNumber = Number.parseInt(value as string);
        const valueIsNumber = valueAsNumber.toString() === value;

        if (valueIsNumber) {
            if (valueAsNumber < 0 || valueAsNumber > 1000) {
                setErrorMessage('Please enter number in range [1,1000]');
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

    const handleChange = useCallback<UseAutocompleteProps<ValueType, false, false, true>['onChange']>(
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
                if (isValidValue(newValue?.value)) {
                    handleChangeValue(newValue?.value);
                }
            }
        },
        [onChange, isValidValue]
    );

    const handleChangeValue = useCallback(
        (fontWeight: FontWeight) => {
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
            value={{ value: localValue }}
            options={fontWeightValues}
            onChange={handleChange}
            filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;

                // Suggest the creation of a new value
                const isExisting = options.some((option) => inputValue === option.value.toString());
                if (inputValue !== '' && isValidValue(inputValue) && !isExisting) {
                    filtered.push({
                        inputValue,
                        value: `Set "${inputValue}"`,
                    });
                }

                return filtered;
            }}
            getOptionLabel={(option) => option.inputValue ?? String(option.value)}
            renderOption={(props, option) => (
                <li style={{ fontWeight: option.value }} {...props}>
                    {capitalize(String(option.value))}
                </li>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={themeKeyLabel(themeKey)}
                    variant="filled"
                    helperText={errorMessage}
                    error={Boolean(errorMessage)}
                />
            )}
            isOptionEqualToValue={(option, currentValue) => option.value === currentValue.value}
            handleHomeEndKeys
            selectOnFocus
            disablePortal
            clearOnBlur
            fullWidth
        />
    );
}

export default FontWeightEditor;
