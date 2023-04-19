import React from 'react';

import { Button, IconButton, Stack } from '@mui/material';

import { ArrowDownward, Delete } from '@mui/icons-material';

function ButtonsSizes() {
    return (
        <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="outlined" size="small" color="primary">
                    Small
                </Button>
                <Button variant="outlined" size="medium" color="primary">
                    Medium
                </Button>
                <Button variant="outlined" size="large" color="primary">
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" size="small" color="primary">
                    Small
                </Button>
                <Button variant="contained" size="medium" color="primary">
                    Medium
                </Button>
                <Button variant="contained" size="large" color="primary">
                    Large
                </Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <IconButton aria-label="delete" size="small">
                    <ArrowDownward fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
                <IconButton aria-label="delete">
                    <Delete fontSize="large" />
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default ButtonsSizes;
