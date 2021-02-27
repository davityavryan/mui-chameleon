import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const DEFAULT_MUI_THEME = createMuiTheme();

import { SideBar } from 'Layouts';

import { ErrorBoundary } from 'Components';

function MainLayout({ children }) {
    return (
        <MuiThemeProvider theme={DEFAULT_MUI_THEME}>
            <SideBar />

            <Box component="main" display="flex" alignItems="center" flexGrow={1} py={3}>
                <Container maxWidth="md">
                    <ErrorBoundary>{children}</ErrorBoundary>
                </Container>
            </Box>
        </MuiThemeProvider>
    );
}

export default memo(MainLayout);
