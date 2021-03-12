import React, { memo } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function Theme({ children }) {
    return <ThemeProvider theme={createMuiTheme({})}>{children}</ThemeProvider>;
}

export default memo(Theme);
