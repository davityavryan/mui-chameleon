import React, { memo } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { useDocsTheme } from 'helpers';

interface IProps {
    children: JSX.Element | JSX.Element[];
}

function Theme({ children }: IProps) {
    const docsTheme = useDocsTheme();

    return <ThemeProvider theme={docsTheme}>{children}</ThemeProvider>;
}

export default memo(Theme);
