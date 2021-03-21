import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

import useStyles from './BasicButtons.style';

function BasicButtons() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
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
            </div>

            <div className={classes.root}>
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
            </div>

            <div className={classes.root}>
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
            </div>
        </Fragment>
    );
}

export default BasicButtons;
