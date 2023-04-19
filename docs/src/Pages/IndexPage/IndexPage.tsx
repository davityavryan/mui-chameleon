import React, { Suspense, lazy, useState } from 'react';

import { Routes, Route, HashRouter } from 'react-router-dom';

import {
    Box,
    CssBaseline,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ThemeOptions,
} from '@mui/material';

import { MainLayout } from 'Layouts';
import { DocsTheme, Spinner } from 'Components';
import { ROUTES, entries } from 'helpers';
import ClickMeImage from 'static/img/click-me.svg';

const ThemeProvider = lazy(() => import('mui-chameleon').then((module) => ({ default: module.ThemeProvider })));
const SideBarEditor = lazy(() => import('mui-chameleon').then((module) => ({ default: module.SideBarEditor })));

function IndexPage() {
    const [updatableTheme, setUpdatedTheme] = useState<ThemeOptions>({});
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const clickMeStyles = {
        position: 'fixed',
        top: 25,
        right: 75,
        zIndex: 'tooltip',
        // filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4))',
        filter: 'drop-shadow(0px 3px 3px rgba(0, 0, 0, 1))',
    };

    const handleThemeSave = (newTheme: ThemeOptions) => {
        setUpdatedTheme(newTheme);
        setIsDialogOpen(true);
    };

    const handleUpdate = (newTheme: ThemeOptions) => {
        setUpdatedTheme(newTheme);
    };

    const handleExpandToggle = () => {
        setIsExpanded(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <HashRouter>
            <DocsTheme mode={updatableTheme?.palette?.mode}>
                <MainLayout>
                    <CssBaseline />

                    <ThemeProvider theme={updatableTheme}>
                        <Routes>
                            {entries(ROUTES).map(([routeKey, { index = false, path, Component }]) => (
                                <Route
                                    key={routeKey}
                                    path={path}
                                    index={index}
                                    element={
                                        <Suspense fallback={<Spinner isFixed />}>
                                            <Component />
                                        </Suspense>
                                    }
                                />
                            ))}
                        </Routes>

                        <SideBarEditor
                            onSave={handleThemeSave}
                            onExpandToggle={handleExpandToggle}
                            onReset={handleCloseDialog}
                            onUpdate={handleUpdate}
                        />
                    </ThemeProvider>

                    {!isExpanded && <Box component={ClickMeImage} sx={clickMeStyles} />}

                    <Dialog
                        open={isDialogOpen}
                        onClose={handleCloseDialog}
                        maxWidth="md"
                        aria-labelledby="theme-dialog-title"
                        fullWidth
                    >
                        <DialogTitle id="theme-dialog-title">New theme</DialogTitle>
                        <DialogContent>
                            <pre>{JSON.stringify(updatableTheme, null, 4)}</pre>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Close</Button>
                            <Button onClick={handleCloseDialog} color="primary" variant="contained" autoFocus>
                                Download
                            </Button>
                        </DialogActions>
                    </Dialog>
                </MainLayout>
            </DocsTheme>
        </HashRouter>
    );
}

export default IndexPage;
