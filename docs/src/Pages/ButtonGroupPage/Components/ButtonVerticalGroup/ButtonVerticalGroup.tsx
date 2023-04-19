import React from 'react';

import { Button, ButtonGroup, Stack } from '@mui/material';

function ButtonVerticalGroup() {
    return (
        <Stack spacing={2} direction="row">
            <ButtonGroup orientation="vertical" color="primary" aria-label="vertical outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default ButtonVerticalGroup;
