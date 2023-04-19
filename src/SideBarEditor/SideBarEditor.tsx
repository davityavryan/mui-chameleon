import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Box, Collapse, ThemeProvider, createTheme, ThemeOptions } from '@mui/material';

import { Editor, Header } from '../internal';

import { useStore } from '../utils';

import { StyledSidebarEditor } from './SideBarEditor.style';

interface Props {
    open?: boolean;
    onReset?: () => void;
    onExpandToggle?: (isOpen: boolean) => void;
    onUpdate?: (newTheme: ThemeOptions) => void;
    onSave: (newTheme: ThemeOptions) => void;
}

function SideBarEditor({ open = false, onReset, onExpandToggle, onSave, onUpdate }: Props) {
    const [isOpen, setIsOpen] = useState(open);

    const [theme, updateTheme] = useStore(
        ({ theme }) => theme,
        ({ updateTheme }) => updateTheme
    );

    const editableTheme = createTheme(theme);

    const defaultTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: editableTheme.palette.mode,
                },
            }),
        [editableTheme.palette.mode]
    );
    const sidebarTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: editableTheme.palette.mode,
                },
                typography: {
                    button: {
                        textTransform: 'none',
                    },
                },
            }),
        [editableTheme.palette.mode]
    );

    const handleToggleOpen = useCallback(() => {
        setIsOpen(!isOpen);

        if (typeof onExpandToggle === 'function') {
            onExpandToggle(!isOpen);
        }
    }, [isOpen]);

    function handleChange<V>(themeKey: string) {
        return (newValue: V) => {
            updateTheme(defaultTheme, themeKey, newValue);
        };
    }

    // TODO: check if needed
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    useEffect(() => {
        onUpdate(theme);
    }, [theme]);

    return (
        <ThemeProvider theme={sidebarTheme}>
            <StyledSidebarEditor isOpen={isOpen} data-testid="side-bar-editor">
                <Header
                    isOpen={isOpen}
                    onReset={onReset}
                    onSave={onSave}
                    onToggleOpen={handleToggleOpen}
                    data-testid="side-bar-header"
                />

                <Collapse in={isOpen} mountOnEnter unmountOnExit>
                    <Box m={1}>
                        <Editor theme={editableTheme} defaultTheme={defaultTheme} onChange={handleChange} />
                    </Box>
                </Collapse>
            </StyledSidebarEditor>
        </ThemeProvider>
    );
}

export default SideBarEditor;
