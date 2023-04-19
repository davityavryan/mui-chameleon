import React from 'react';

import { Button, Stack } from '@mui/material';

function BasicButtons() {
    return (
        <Stack spacing={2} direction="column">
            <Stack spacing={2} direction="row">
                <Button variant="text">Default</Button>
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="secondary" disabled>
                    Disabled
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="secondary" disabled>
                    Disabled
                </Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled>
                    Disabled
                </Button>
            </Stack>
        </Stack>
    );
}

export default BasicButtons;
