import React from 'react';

import IconButton from '@material-ui/core/IconButton';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AlarmIcon from '@material-ui/icons/Alarm';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './IconButtons.style';

function IconButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </div>
    );
}

export default IconButtons;
