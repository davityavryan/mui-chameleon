// Example from https://material-ui.com/components/text-fields/#textfield
// and https://material-ui.com/components/text-fields/#form-props

import React from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import useStyles from './VariantsTextFields.style';

function VariantsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Typography paragraph>Standard</Typography>

            <div>
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
            </div>

            <Typography paragraph>Filled</Typography>

            <div>
                <TextField required id="filled-required" label="Required" defaultValue="Hello World" variant="filled" />
                <TextField disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled" />
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
            </div>

            <Typography paragraph>Outlined</Typography>

            <div>
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
            </div>
        </form>
    );
}

export default VariantsTextFields;
