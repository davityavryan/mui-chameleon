import ListItemText from '@material-ui/core/ListItemText';
import React, { Fragment, useContext } from 'react';

import objectPath from 'object-path';

import Box from '@material-ui/core/Box';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ChameleonContext from '../internal/ChameleonContext/ChameleonContext';
import Header from '../internal/Header/Header';
import Section from '../internal/Section/Section';
import Parser from '../internal/Parser/Parser';
import themeKeyLabel from '../utils/themeKeyLabel';

import { themeMap } from '../utils/themeMap';

function Editor({ open }) {
    const { state, dispatch } = useContext(ChameleonContext);

    const muiTheme = createMuiTheme(state.theme);

    const defaultTheme = createMuiTheme({
        palette: { type: muiTheme.palette.type },
    });

    const handleChange = (themeKey) => (newValue) => {
        const dynamicThemeCopy = JSON.parse(JSON.stringify(state.theme));

        objectPath.set(dynamicThemeCopy, themeKey, newValue);

        dispatch({
            type: 'update',
            payload: dynamicThemeCopy,
        });
    };

    const horizontalPosition = muiTheme.direction === 'rtl' ? { left: 0 } : { right: 0 };

    return (
        <MuiThemeProvider theme={defaultTheme}>
            <Box position="fixed" top={0} zIndex="tooltip" width={defaultTheme.spacing(37.5)} maxHeight="100vh" style={{ overflowY: 'auto' }} {...horizontalPosition}>
                <Header />

                <Box m={1}>
                    {Object.entries(muiTheme).map(([key, themeItem]) => {
                        const themeKey = key;
                        // const themeKey = `palette.${key}`;
                        const mapItem = themeMap[themeKey];

                        if (typeof themeItem === 'function' || mapItem && mapItem.type === 'skip') {
                            return null;
                        }

                        if (mapItem && mapItem.type === 'soon') {
                            return (
                                <Section key={themeKey} title={themeKey} secondaryTitle="Coming soon" />
                            );
                        }

                        if (typeof themeItem === 'object') {
                            return (
                                <Section key={themeKey} title={themeKey}>
                                    <Parser
                                        item={themeItem}
                                        itemKey={themeKey}
                                        defaultValue={objectPath.get(defaultTheme, themeKey)}
                                        onChange={handleChange}
                                    />
                                </Section>
                            );
                        }

                        return (
                            <ExpansionPanel key={themeKey}>
                                <Parser
                                    item={themeItem}
                                    itemKey={themeKey}
                                    defaultValue={objectPath.get(defaultTheme, themeKey)}
                                    onChange={handleChange}
                                    isTopLevel
                                />
                            </ExpansionPanel>
                        );
                    })}
                </Box>
            </Box>
        </MuiThemeProvider>
    )
}

export default Editor;
