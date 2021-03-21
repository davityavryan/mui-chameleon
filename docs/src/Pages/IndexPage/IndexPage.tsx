import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeOptions } from '@material-ui/core/styles';

import { ThemeProvider, SideBarEditor } from 'material-ui-chameleon';

import { MainLayout } from 'Layouts';
import { Theme, Spinner } from 'Components';
import { ROUTES } from 'helpers';
import ClickMeImage from 'static/img/click-me.svg';

import useStyles from './IndexPage.style';

const initialTheme = {};

function IndexPage() {
    const classes = useStyles();

    const [updatableTheme, setUpdatedTheme] = useState(initialTheme);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleThemeSave = (newTheme: ThemeOptions) => {
        setUpdatedTheme(newTheme);
        setIsDialogOpen(true);
    };

    const handleExpandToggle = () => {
        setIsExpanded(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <HashRouter>
            <Theme>
                <MainLayout>
                    <CssBaseline />

                    <ThemeProvider theme={updatableTheme}>
                        <Suspense fallback={<Spinner isFixed />}>
                            <Switch>
                                {Object.entries(ROUTES).map(([routeKey, route]) => (
                                    <Route key={routeKey} {...route} />
                                ))}
                            </Switch>
                        </Suspense>

                        <SideBarEditor onSave={handleThemeSave} onExpandToggle={handleExpandToggle} />
                    </ThemeProvider>

                    {!isExpanded && <ClickMeImage className={classes.clickMe} />}

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
            </Theme>
        </HashRouter>
    );
}

export default () => {
    ReactDOM.render(
        <Suspense fallback={<Spinner />}>
            <IndexPage />
        </Suspense>,
        document.getElementById('root')
    );
};
