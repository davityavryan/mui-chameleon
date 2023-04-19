import React from 'react';

import { Box, BoxProps, Backdrop, CircularProgress, useTheme } from '@mui/material';

interface Props extends BoxProps {
    isFixed?: boolean;
    hasBackDrop?: boolean;
    onClose?: () => void;
}

function Spinner({ isFixed = false, hasBackDrop = false, onClose, ...other }: Props) {
    const { zIndex } = useTheme();

    if (typeof onClose !== 'function') {
        onClose = () => undefined;
    }

    let spinnerStyles = {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    };

    if (isFixed) {
        spinnerStyles = Object.assign(spinnerStyles, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        });
    }

    if (hasBackDrop) {
        return (
            <Box component={Backdrop} sx={{ zIndex: zIndex.modal }} onClick={onClose} open>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={spinnerStyles} {...other}>
            <CircularProgress />
        </Box>
    );
}

export default Spinner;
