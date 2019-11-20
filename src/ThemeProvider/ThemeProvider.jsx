import React, { useReducer } from 'react';

import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ChameleonContext from '../internal/ChameleonContext/ChameleonContext';

const reducer = (state, action) => {
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
};

function ThemeProvider({ theme, children }) {
    const [state, dispatch] = useReducer(reducer, { theme, originalTheme: theme });

    return (
        <ChameleonContext.Provider value={{ state, dispatch }}>
            <MuiThemeProvider theme={createMuiTheme(state.theme)}>
                {children}
            </MuiThemeProvider>
        </ChameleonContext.Provider>
    )
}

export default ThemeProvider;
