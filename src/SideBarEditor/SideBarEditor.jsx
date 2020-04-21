import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import objectPath from 'object-path';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import { ThemeProvider as MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import ChameleonContext from '../internal/ChameleonContext/ChameleonContext';
import Editor from '../internal/Editor/Editor';
import Header from '../internal/Header/Header';

const useStyles = makeStyles(({ spacing, transitions, zIndex }) => ({
    root: ({ isOpen, muiDirection }) => ({
        position: 'fixed',
        top: 0,
        zIndex: zIndex.tooltip + 10, // more than the highest zIndex
        width: spacing(isOpen ? 37.5 : 9.5),
        maxHeight: '100vh',
        overflowY: 'auto',
        [muiDirection === 'rtl' ? 'left' : 'right']: 0,
        transition: transitions.create(['width']),
    }),
}));

function SideBarEditor({ open, onReset, onExpandToggle, onSave }) {
    const [isOpen, setIsOpen] = useState(open);

    const { state, dispatch } = useContext(ChameleonContext);

    const muiTheme = createMuiTheme(state.theme);

    const classes = useStyles({
        isOpen,
        muiDirection: muiTheme.direction,
    });

    const defaultTheme = createMuiTheme({
        palette: {
            type: muiTheme.palette.type,
        },
        overrides: {
            MuiPaper: {
                root: {
                    // Do not instanciate font-size from `body`
                    fontSize: 16,
                }
            },
            MuiAutocomplete: {
                popper: {
                    zIndex: `${muiTheme.zIndex.tooltip + 11} !important`,
                },
            },
            MuiPopover: {
                root: {
                    zIndex: `${muiTheme.zIndex.tooltip + 11} !important`,
                },
            },
        },
    });

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);

        onExpandToggle(!isOpen);
    };

    const handleChange = (themeKey) => (newValue) => {
        const dynamicThemeCopy = JSON.parse(JSON.stringify(state.theme));

        objectPath.set(dynamicThemeCopy, themeKey, newValue);

        dispatch({
            type: 'update',
            payload: dynamicThemeCopy,
        });
    };

    // TODO: check if needed
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    return (
        <MuiThemeProvider theme={defaultTheme}>
            <div className={classes.root}>
                <Header
                    isOpen={isOpen}
                    onReset={onReset}
                    onSave={onSave}
                    onToggleOpen={handleToggleOpen}
                />

                <Collapse in={isOpen} mountOnEnter unmountOnExit>
                    <Box m={1}>
                        <Editor
                            theme={muiTheme}
                            defaultTheme={defaultTheme}
                            onChange={handleChange}
                        />
                    </Box>
                </Collapse>
            </div>
        </MuiThemeProvider>
    )
}

SideBarEditor.propTypes = {
    open: PropTypes.bool,
    onReset: PropTypes.func,
    onExpandToggle: PropTypes.func,
    onSave: PropTypes.func.isRequired,
};

SideBarEditor.defaultProps = {
    open: false,
    onReset: () => undefined,
    onExpandToggle: () => undefined,
};

export default SideBarEditor;
