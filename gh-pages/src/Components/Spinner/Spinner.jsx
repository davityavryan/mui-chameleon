import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './Spinner.style';

function Spinner({ withBackDrop, onClose, ...other }) {
    const classes = useStyles();

    if (withBackDrop) {
        return (
            <Backdrop className={classes.backdrop} onClick={onClose} open>
                <CircularProgress />
            </Backdrop>
        );
    }

    return (
        <div className={classes.spinner} {...other}>
            <CircularProgress />
        </div>
    );
}

Spinner.propTypes = {
    withBackDrop: PropTypes.bool,
    onClose: PropTypes.func,
};

Spinner.defaultProps = {
    withBackDrop: false,
    onClose: () => undefined,
};

export default memo(Spinner);
