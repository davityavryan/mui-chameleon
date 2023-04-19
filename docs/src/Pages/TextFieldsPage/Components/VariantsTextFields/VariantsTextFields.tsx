// Example from https://mui.com/components/text-fields/#textfield
// and https://mui.com/components/text-fields/#form-props

import React from 'react';

import { TextField, Typography, Stack } from '@mui/material';

function VariantsTextFields() {
    return (
        <form autoComplete="off" noValidate>
            <Stack spacing={2} direction="row">
                <div>
                    <Typography paragraph>Standard</Typography>

                    <Stack spacing={2} direction="column">
                        <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                        <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField id="standard-search" label="Search field" type="search" />
                        <TextField
                            id="standard-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                        <TextField
                            error
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                        />
                    </Stack>
                </div>

                <div>
                    <Typography paragraph>Filled</Typography>

                    <Stack spacing={2} direction="column">
                        <TextField
                            required
                            id="filled-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            disabled
                            id="filled-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                        />
                        <TextField
                            id="filled-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                        />
                        <TextField
                            id="filled-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                        <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                        <TextField
                            id="filled-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="filled"
                        />
                        <TextField
                            error
                            id="filled-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            variant="filled"
                        />
                    </Stack>
                </div>

                <div>
                    <Typography paragraph>Outlined</Typography>

                    <Stack spacing={2} direction="column">
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                        <TextField
                            id="outlined-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                            variant="outlined"
                        />
                        <TextField
                            error
                            id="outlined-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            variant="outlined"
                        />
                    </Stack>
                </div>
            </Stack>
        </form>
    );
}

export default VariantsTextFields;
