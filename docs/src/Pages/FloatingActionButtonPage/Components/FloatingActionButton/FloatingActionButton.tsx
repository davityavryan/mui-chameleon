import React from 'react';

import { Fab, Stack } from '@mui/material';

import { Add, Edit, Favorite, Navigation } from '@mui/icons-material';

function FloatingActionButton() {
    return (
        <Stack spacing={2} direction="row">
            <Fab sx={{ m: 1 }} color="primary" aria-label="add">
                <Add />
            </Fab>
            <Fab sx={{ m: 1 }} color="secondary" aria-label="edit">
                <Edit />
            </Fab>
            <Fab sx={{ m: 1 }} variant="extended">
                <Navigation sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab sx={{ m: 1 }} disabled aria-label="like">
                <Favorite />
            </Fab>
        </Stack>
    );
}

export default FloatingActionButton;
