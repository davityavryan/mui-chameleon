import React from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import useStyles from './ButtonsGroupSizes.style';

function ButtonsGroupSizes() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    );
}

export default ButtonsGroupSizes;
