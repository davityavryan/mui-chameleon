import React, { memo } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './Spinner.style';

function Spinner({ isFixed, hasBackDrop, onClose, ...other }) {
    const classes = useStyles();

    if (hasBackDrop) {
        return (
            <Backdrop className={classes.backdrop} onClick={onClose} open>
                <CircularProgress />
            </Backdrop>
        );
    }

    return (
        <Box className={clsx(classes.spinner, isFixed && classes.isFixed)} {...other}>
            <CircularProgress />
        </Box>
    );
}

Spinner.propTypes = {
    ...Box.propTypes,
    isFixed: PropTypes.bool,
    hasBackDrop: PropTypes.bool,
    onClose: PropTypes.func,
};

Spinner.defaultProps = {
    ...Box.defaultProps,
    isFixed: false,
    hasBackDrop: false,
    onClose: () => undefined,
};

export default memo(Spinner);
