import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

import Alert from '@material-ui/lab/Alert';

import CheckIcon from '@material-ui/icons/Check';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import useStyles from './AlertsWithIcons.style';

function AlertsWithIcons() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <Alert icon={<CheckIcon fontSize="inherit" />} onClose={() => undefined}>
                    This is a success alert — check it out!
                </Alert>
                <Alert
                    iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" /> }}
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
            </div>
        </Fragment>
    );
}

export default AlertsWithIcons;
