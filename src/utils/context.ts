import { createContext } from 'react';

import { ThemeOptions } from '@material-ui/core/styles';

export type TState = {
    theme: ThemeOptions;
    originalTheme: ThemeOptions;
};

export type TAction = {
    type: 'update' | 'reset';
    payload?: ThemeOptions;
};

export type TChameleonContext = {
    state: TState;
    dispatch: ({ type, payload }: TAction) => void;
};

export const Context = createContext<TChameleonContext>(null);
