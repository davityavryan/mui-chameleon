import React from 'react';

import { IconButton, Stack } from '@mui/material';

import { AddShoppingCart, Alarm, Delete } from '@mui/icons-material';

function IconButtons() {
    return (
        <Stack spacing={2} direction="row">
            <IconButton aria-label="delete">
                <Delete />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <Delete />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <Alarm />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCart />
            </IconButton>
        </Stack>
    );
}

export default IconButtons;
