import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './BasicButtonGroup.style';

function BasicButtonGroup() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    );
}

export default BasicButtonGroup;
