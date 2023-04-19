import React from 'react';

import { Button, ButtonGroup, Stack } from '@mui/material';

function ButtonsGroupSizes() {
    return (
        <Stack spacing={2} direction="row">
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );
}

export default ButtonsGroupSizes;
