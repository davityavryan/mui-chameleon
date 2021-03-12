import React, { memo } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

function Theme({ children }: IProps) {
    return <ThemeProvider theme={createMuiTheme({})}>{children}</ThemeProvider>;
}

export default memo(Theme);
