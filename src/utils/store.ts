import delve from 'dlv';
import { dset } from 'dset';

import { ThemeOptions } from '@mui/material';

import { makeStore, Store } from './makeStore';

export type State = {
    theme: ThemeOptions;
    initialTheme: ThemeOptions;
};

export type Actions = {
    setTheme: (store: Store<State, Actions>, newTheme: ThemeOptions, initialTheme?: ThemeOptions) => void;
    updateTheme: <V>(store: Store<State, Actions>, defaultTheme: ThemeOptions, themeKey: string, newValue: V) => void;
    reset: (store: Store<State, Actions>) => void;
};

const actions: Actions = {
    setTheme(store, theme, initialTheme) {
        const newState: Partial<State> = { theme };

        if (initialTheme) {
            newState.initialTheme = initialTheme;
        }

        store.setState({
            ...store.state,
            ...newState,
        });
    },
    // TODO: remove values that are same as in default theme
    updateTheme(store, defaultTheme, themeKey, newValue) {
        const dynamicThemeCopy = JSON.parse(JSON.stringify(store.state.theme));

        const parentKey = themeKey.replace(/^(.*)\.[^.]*$/, '$1');
        // const defaultValue = delve(defaultTheme, themeKey);
        const parentDefaultValue = delve(defaultTheme, parentKey);

        if (Array.isArray(parentDefaultValue)) {
            // If item is an array and we are setting by specific index, rest should be set from default theme
            dset(dynamicThemeCopy, parentKey, parentDefaultValue);
            dset(dynamicThemeCopy, themeKey, newValue);
        } else {
            // MUI will fail if palette's color is changes without having `main`. Set from default
            if (parentDefaultValue.main !== undefined && themeKey !== 'main') {
                dset(dynamicThemeCopy, `${parentKey}.main`, parentDefaultValue.main);
            }

            dset(dynamicThemeCopy, themeKey, newValue);
        }

        store.setState({
            ...store.state,
            theme: dynamicThemeCopy,
        });
    },
    reset(store) {
        store.setState({
            ...store.state,
            theme: { ...store.state.initialTheme },
        });
    },
};

export const useStore = makeStore<State, Actions>({ theme: {}, initialTheme: {} }, actions);
