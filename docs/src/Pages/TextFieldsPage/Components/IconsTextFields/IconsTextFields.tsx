// Example from https://mui.com/components/text-fields/#icons

import React from 'react';

import { Box, FormControl, Input, InputLabel, InputAdornment, TextField, Unstable_Grid2 as Grid } from '@mui/material';

import { AccountCircle } from '@mui/icons-material';

function IconsTextFields() {
    return (
        <div>
            <FormControl sx={{ m: 1 }}>
                <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TextField
                id="input-with-icon-textfield"
                label="TextField"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
                sx={{ m: 1 }}
            />
            <Box m={1}>
                <Grid spacing={1} alignItems="flex-end" container>
                    <Grid>
                        <AccountCircle />
                    </Grid>
                    <Grid>
                        <TextField id="input-with-icon-grid" label="With a grid" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default IconsTextFields;
