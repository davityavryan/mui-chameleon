import React, { useEffect } from 'react';

import { ThemeProvider as MuiThemeProvider, createTheme, ThemeOptions } from '@mui/material';

import { useStore } from '../utils';

interface Props {
    theme: ThemeOptions;
    children: JSX.Element | JSX.Element[];
}

function ThemeProvider({ theme, children }: Props) {
    const [state, actions] = useStore();

    useEffect(() => {
        actions.setTheme(theme, { ...theme });
    }, []);

    return <MuiThemeProvider theme={createTheme(state.theme)}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
