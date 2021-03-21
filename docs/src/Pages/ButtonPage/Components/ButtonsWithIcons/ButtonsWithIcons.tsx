import React from 'react';

import Button from '@material-ui/core/Button';

import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

import useStyles from './ButtonsWithIcons.style';

function ButtonsWithIcons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                Send
            </Button>
            <Button variant="contained" color="default" startIcon={<CloudUploadIcon />}>
                Upload
            </Button>
            <Button variant="contained" color="secondary" startIcon={<KeyboardVoiceIcon />} disabled>
                Talk
            </Button>
            <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />}>
                Save
            </Button>
            <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                Save
            </Button>
        </div>
    );
}

export default ButtonsWithIcons;
