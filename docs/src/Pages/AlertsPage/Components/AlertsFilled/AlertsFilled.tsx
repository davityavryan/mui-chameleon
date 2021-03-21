import React from 'react';

import Alert from '@material-ui/lab/Alert';

import useStyles from './AlertsFilled.style';

function AlertsFilled() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert variant="filled" severity="error">
                This is an error alert — check it out!
            </Alert>
            <Alert variant="filled" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            <Alert variant="filled" severity="info">
                This is an info alert — check it out!
            </Alert>
            <Alert variant="filled" severity="success">
                This is a success alert — check it out!
            </Alert>
        </div>
    );
}

export default AlertsFilled;
