import React from 'react';

import { Alert, Stack } from '@mui/material';

function AlertsOutlined() {
    return (
        <Stack sx={{ width: '100%', my: 2 }} spacing={2}>
            <Alert variant="outlined" severity="error">
                This is an error alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="info">
                This is an info alert — check it out!
            </Alert>
            <Alert variant="outlined" severity="success">
                This is a success alert — check it out!
            </Alert>
        </Stack>
    );
}

export default AlertsOutlined;
