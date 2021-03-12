import React, { memo } from 'react';

import clsx from 'clsx';

import Box, { BoxProps } from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './Spinner.style';

interface IProps extends BoxProps {
    isFixed?: boolean;
    hasBackDrop?: boolean;
    onClose?: () => void;
}

function Spinner({ isFixed = false, hasBackDrop = false, onClose, ...other }: IProps) {
    const classes = useStyles();

    if (typeof onClose !== 'function') {
        onClose = () => undefined;
    }

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

export default memo(Spinner);
