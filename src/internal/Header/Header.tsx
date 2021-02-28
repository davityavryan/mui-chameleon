import React, { useContext } from 'react';

import { Button, IconButton, Paper, createMuiTheme } from '@material-ui/core';

import ChameleonContext from '../ChameleonContext/ChameleonContext';

import { Logo } from '..';

import useStyles from './Header.style';

interface IProps {
    onToggleOpen: any;
    onReset?: any;
    onSave: any;
    isOpen: boolean;
}

function Header({ isOpen, onToggleOpen, onReset, onSave }: IProps) {
    const { state, dispatch } = useContext(ChameleonContext);

    const { palette } = createMuiTheme(state.theme);

    const isDry = JSON.stringify(state.theme) === JSON.stringify(state.originalTheme);

    const classes = useStyles({ isOpen, isDry });

    const handleReset = () => {
        dispatch({ type: 'reset' });

        if (typeof onReset === 'function') {
            onReset();
        }
    };

    const handleSave = () => {
        onSave(state.theme);
    };

    return (
        <Paper className={classes.root}>
            {!isDry && isOpen && (
                <Button variant="contained" size="small" onClick={handleReset}>
                    Reset
                </Button>
            )}

            <IconButton onClick={onToggleOpen} data-testid="side-bar-logo-button">
                <Logo palette={palette} />
            </IconButton>

            {!isDry && isOpen && (
                <Button variant="contained" color="primary" size="small" onClick={handleSave}>
                    Save
                </Button>
            )}
        </Paper>
    );
}

export default Header;
