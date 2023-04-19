import React from 'react';

import { Button, IconButton, createTheme, ThemeOptions } from '@mui/material';

import { Logo } from '..';
import { useStore } from '../../utils';

import { StyledPaper } from './Header.style';

interface Props {
    onToggleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onReset?: () => void;
    onSave: (updatedTheme: ThemeOptions) => void;
    isOpen: boolean;
}

function Header({ isOpen, onToggleOpen, onReset, onSave }: Props) {
    const [state, actions] = useStore();

    const { palette } = createTheme(state.theme);

    const isDry = JSON.stringify(state.theme) === JSON.stringify(state.initialTheme);

    const handleReset = () => {
        actions.reset();

        if (typeof onReset === 'function') {
            onReset();
        }
    };

    const handleSave = () => {
        onSave(state.theme);
    };

    return (
        <StyledPaper isOpen={isOpen} isDry={isDry} square>
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
        </StyledPaper>
    );
}

export default Header;
