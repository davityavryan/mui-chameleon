import React from 'react';

import Alert from '@material-ui/lab/Alert';

import useStyles from './AlertsStandard.style';

function AlertsStandard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert variant="standard" severity="error">
                This is an error alert — check it out!
            </Alert>
            <Alert variant="standard" severity="warning">
                This is a warning alert — check it out!
            </Alert>
            <Alert variant="standard" severity="info">
                This is an info alert — check it out!
            </Alert>
            <Alert variant="standard" severity="success">
                This is a success alert — check it out!
            </Alert>
        </div>
    );
}

export default AlertsStandard;
