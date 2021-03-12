import { createContext } from 'react';

import { ThemeOptions } from '@material-ui/core/styles';

export type TChameleonContext = {
    state: {
        theme: ThemeOptions;
        originalTheme: ThemeOptions;
    };
    dispatch: any;
};

export const Context = createContext<TChameleonContext>(null);
