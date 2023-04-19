import React from 'react';

import { Button, ButtonGroup, Stack } from '@mui/material';

function BasicButtonGroup() {
    return (
        <Stack spacing={2} direction="row">
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default BasicButtonGroup;
