import React, { useContext, useEffect, useMemo, useState } from 'react';

import delve from 'dlv';
import { dset } from 'dset';

import { Box, Collapse } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Editor, Header } from '../internal';
import { Context } from '../utils';

import useStyles from './SideBarEditor.style';

interface IProps {
    open?: any;
    onReset?: any;
    onExpandToggle?: any;
    onSave: any;
}

function SideBarEditor({ open = false, onReset, onExpandToggle, onSave }: IProps) {
    const [isOpen, setIsOpen] = useState(open);

    const { state, dispatch } = useContext(Context);

    const editableTheme = createMuiTheme(state.theme);

    const classes = useStyles({
        isOpen,
        muiDirection: editableTheme.direction,
    });

    const defaultTheme = useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: editableTheme.palette.type,
                },
                zIndex: {
                    tooltip: editableTheme.zIndex.tooltip + 11,
                },
                overrides: {
                    MuiPaper: {
                        root: {
                            fontSize: 16, // Do not instantiate font-size from `body`
                        },
                    },
                },
            }),
        []
    );

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);

        if (typeof onExpandToggle === 'function') {
            onExpandToggle(!isOpen);
        }
    };

    const handleChange = (themeKey: any) => (newValue: any) => {
        const dynamicThemeCopy = JSON.parse(JSON.stringify(state.theme));

        const parentKey = themeKey.replace(/^(.*)\.[^.]*$/, '$1');
        const parentDefaultValue = delve(defaultTheme, parentKey);

        if (Array.isArray(parentDefaultValue)) {
            delve(dynamicThemeCopy, parentKey, parentDefaultValue);
        } else if (parentDefaultValue.main !== undefined) {
            if (themeKey !== 'main') {
                dset(dynamicThemeCopy, `${parentKey}.main`, parentDefaultValue.main);
            }
        }

        dset(dynamicThemeCopy, themeKey, newValue);

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
            <div className={classes.root} data-testid="side-bar-editor">
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
            </div>
        </MuiThemeProvider>
    );
}

export default SideBarEditor;
