import React, { Fragment } from 'react';

import { Box, Container } from '@mui/material';

import { SideBar } from 'Layouts';

import { ErrorBoundary } from 'Components';

interface Props {
    children: JSX.Element | JSX.Element[];
}

function MainLayout({ children }: Props) {
    return (
        <Fragment>
            <SideBar />

            <Box component="main" display="flex" alignItems="center" flexGrow={1} py={3}>
                <Container maxWidth="lg" sx={{ pl: { md: 32 + 3 } }}>
                    <ErrorBoundary>{children}</ErrorBoundary>
                </Container>
            </Box>
        </Fragment>
    );
}

export default MainLayout;
