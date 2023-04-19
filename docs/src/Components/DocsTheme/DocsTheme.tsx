import React from 'react';

import { PaletteMode, ThemeProvider } from '@mui/material';

import { useDocsTheme } from 'helpers';

interface Props {
    mode?: PaletteMode;
    children: JSX.Element | JSX.Element[];
}

function DocsTheme({ mode, children }: Props) {
    const docsTheme = useDocsTheme({ mode });

    return <ThemeProvider theme={docsTheme}>{children}</ThemeProvider>;
}

export default DocsTheme;
