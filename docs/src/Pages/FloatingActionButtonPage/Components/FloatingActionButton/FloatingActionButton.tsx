import React from 'react';

import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import useStyles from './FloatingActionButton.style';

function FloatingActionButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab variant="extended">
                <NavigationIcon className={classes.extendedIcon} />
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
        </div>
    );
}

export default FloatingActionButton;
