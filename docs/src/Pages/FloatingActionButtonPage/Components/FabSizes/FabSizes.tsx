import React, { Fragment } from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';

import useStyles from './FabSizes.style';

function FabSizes() {
    const classes = useStyles();

    return (
        <Fragment>
            <div>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
            </div>
            <div>
                <Fab variant="extended" size="small" color="primary" aria-label="add" className={classes.margin}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Fab>
                <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.margin}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Fab>
                <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                    <NavigationIcon className={classes.extendedIcon} />
                    Extended
                </Fab>
            </div>
        </Fragment>
    );
}

export default FabSizes;
