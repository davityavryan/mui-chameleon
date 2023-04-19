import React, { ChangeEvent } from 'react';

import { InputLabel, FormHelperText, FormControl, Select, SelectChangeEvent, NativeSelect } from '@mui/material';

function NativeSelects() {
    const [state, setState] = React.useState<{ age: string; name: string }>({
        age: '',
        name: 'hai',
    });

    const handleChange = (event: SelectChangeEvent | ChangeEvent<HTMLSelectElement>) => {
        const name = event.target.name as keyof typeof state;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    name="age"
                    inputProps={{ 'aria-label': 'age' }}
                    sx={{ mt: 2 }}
                >
                    <option value="">None</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Age
                </InputLabel>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-label-placeholder',
                    }}
                >
                    <option value="">None</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
                <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    inputProps={{
                        name: 'name',
                        id: 'name-native-disabled',
                    }}
                >
                    <option value="">None</option>
                    <optgroup label="Author">
                        <option value="hai">Hai</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
                <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} error>
                <InputLabel htmlFor="name-native-error">Name</InputLabel>
                <NativeSelect
                    value={state.name}
                    onChange={handleChange}
                    name="name"
                    inputProps={{
                        id: 'name-native-error',
                    }}
                >
                    <optgroup label="Author">
                        <option value="hai">Hai</option>
                    </optgroup>
                    <optgroup label="Contributors">
                        <option value="olivier">Olivier</option>
                        <option value="kevin">Kevin</option>
                    </optgroup>
                </NativeSelect>
                <FormHelperText>Error</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Uncontrolled</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <NativeSelect
                    value={state.age}
                    name="age"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'age' }}
                    sx={{ mt: 2 }}
                >
                    <option value="" disabled>
                        Placeholder
                    </option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
                <FormHelperText>Placeholder</FormHelperText>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="age-native-required">Age</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    name="age"
                    inputProps={{
                        id: 'age-native-required',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
        </div>
    );
}

export default NativeSelects;
