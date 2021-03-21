import React, { useReducer } from 'react';

import { ThemeProvider as MuiThemeProvider, createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

import { Context, TAction, TState } from '../utils';

function reducer(state: TState, action: TAction) {
    switch (action.type) {
        case 'reset': {
            return {
                ...state,
                theme: JSON.parse(JSON.stringify(state.originalTheme)),
            };
        }
        case 'update': {
            return {
                ...state,
                theme: action.payload,
            };
        }
    }
}

interface IProps {
    theme: ThemeOptions;
    children: JSX.Element | JSX.Element[];
}

function ThemeProvider({ theme, children }: IProps) {
    const [state, dispatch] = useReducer(reducer, { theme, originalTheme: theme });

    return (
        <Context.Provider value={{ state, dispatch }}>
            <MuiThemeProvider theme={createMuiTheme(state.theme)}>{children}</MuiThemeProvider>
        </Context.Provider>
    );
}

export default ThemeProvider;
