// Example is taken from https://mui.com/components/text-fields/#input-adornments

import React from 'react';

import {
    Box,
    IconButton,
    Input,
    FilledInput,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText,
    FormControl,
    TextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function InputAdornmentsTextFields() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange: (prop: string) => React.ChangeEventHandler<HTMLInputElement> = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword: React.MouseEventHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Box display="flex" flexWrap="wrap">
            <div>
                <TextField
                    label="With normal TextField"
                    id="standard-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                    sx={{ width: '25ch', m: 1 }}
                />
                <FormControl sx={{ width: '25ch', m: 1, mt: 3 }}>
                    <Input
                        id="standard-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', m: 1 }}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }} fullWidth>
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            <div>
                <TextField
                    label="With normal TextField"
                    id="filled-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                    variant="filled"
                    sx={{ width: '25ch', m: 1 }}
                />
                <FormControl sx={{ width: '25ch', m: 1 }} variant="filled">
                    <FilledInput
                        id="filled-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                    <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', m: 1 }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="filled" fullWidth>
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl>
            </div>
            <div>
                <TextField
                    label="With normal TextField"
                    id="outlined-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    }}
                    variant="outlined"
                    sx={{ width: '25ch', m: 1 }}
                />
                <FormControl sx={{ width: '25ch', m: 1 }} variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        value={values.weight}
                        onChange={handleChange('weight')}
                        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        // labelWidth={0}
                    />
                    <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl sx={{ width: '25ch', m: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        // labelWidth={70}
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        // labelWidth={60}
                    />
                </FormControl>
            </div>
        </Box>
    );
}

export default InputAdornmentsTextFields;
