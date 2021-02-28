import React, { createContext } from 'react';

import { ThemeOptions } from '@material-ui/core/styles';

export type TChameleonContext = {
    state: {
        theme: ThemeOptions;
        originalTheme: ThemeOptions;
    };
    dispatch: any;
};

const ChameleonContext = createContext<TChameleonContext>(null);

export default ChameleonContext;
