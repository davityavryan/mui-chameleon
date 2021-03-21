import React from 'react';

import Alert from '@material-ui/lab/Alert';

import useStyles from './AlertsOutlined.style';

function AlertsOutlined() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
        </div>
    );
}

export default AlertsOutlined;
