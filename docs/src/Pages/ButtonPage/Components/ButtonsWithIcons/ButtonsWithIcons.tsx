import React from 'react';

import { Button, Stack } from '@mui/material';

import { Delete, CloudUpload, KeyboardVoice, Save, Send } from '@mui/icons-material';

function ButtonsWithIcons() {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" color="secondary" startIcon={<Delete />}>
                Delete
            </Button>
            <Button variant="contained" color="primary" endIcon={<Send />}>
                Send
            </Button>
            <Button variant="contained" color="success" startIcon={<CloudUpload />}>
                Upload
            </Button>
            <Button variant="contained" color="secondary" startIcon={<KeyboardVoice />} disabled>
                Talk
            </Button>
            <Button variant="contained" color="primary" size="small" startIcon={<Save />}>
                Save
            </Button>
            <Button variant="contained" color="primary" size="large" startIcon={<Save />}>
                Save
            </Button>
        </Stack>
    );
}

export default ButtonsWithIcons;
