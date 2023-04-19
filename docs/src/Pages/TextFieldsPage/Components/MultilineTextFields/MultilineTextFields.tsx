// Example from https://mui.com/components/text-fields/#multiline

import React from 'react';

import { TextField } from '@mui/material';

function MultilineTextFields() {
    const [value, setValue] = React.useState('Controlled');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    };

    return (
        <form autoComplete="off" noValidate>
            <div>
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField id="standard-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline />
                <TextField
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    sx={{ m: 1, width: '25ch' }}
                />
            </div>
            <div>
                <TextField
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    variant="filled"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    id="filled-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="filled"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    id="filled-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="filled"
                    sx={{ m: 1, width: '25ch' }}
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    sx={{ m: 1, width: '25ch' }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    sx={{ m: 1, width: '25ch' }}
                />
            </div>
        </form>
    );
}

export default MultilineTextFields;
