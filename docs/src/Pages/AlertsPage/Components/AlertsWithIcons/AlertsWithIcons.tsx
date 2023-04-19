import React from 'react';

import { Alert, Button, Stack } from '@mui/material';

import { Check, CheckCircleOutline } from '@mui/icons-material';

function AlertsWithIcons() {
    return (
        <Stack sx={{ width: '100%', my: 2 }} spacing={2}>
            <Alert icon={<Check fontSize="inherit" />}>This is a success alert — check it out!</Alert>

            <Alert
                iconMapping={{ success: <CheckCircleOutline fontSize="inherit" /> }}
                action={
                    <Button color="inherit" size="small">
                        UNDO
                    </Button>
                }
            >
                This is a success alert — check it out!
            </Alert>
            <Alert icon={false} severity="success">
                This is a success alert — check it out!
            </Alert>
        </Stack>
    );
}

export default AlertsWithIcons;
