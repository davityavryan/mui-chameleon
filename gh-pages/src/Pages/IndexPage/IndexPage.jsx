import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ThemeProvider, SideBarEditor } from 'material-ui-chameleon';

import { MainLayout } from 'Layouts';

import { Spinner } from 'Components';

import { ROUTES } from 'helpers';

import ClickMe from 'static/img/click-me.svg';

import useStyles from './IndexPage.style';

const initialTheme = {
    palette: {
        type: 'light',
    },
};

function IndexPage() {
    const classes = useStyles();

    const [updatedTheme, setUpdatedTheme] = useState(initialTheme);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleThemeSave = (newTheme) => {
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
            <ThemeProvider theme={initialTheme}>
                <MainLayout>
                    <CssBaseline />

                    <Suspense fallback={<Spinner isFixed />}>
                        <Switch>
                            {Object.entries(ROUTES).map(([routeKey, { path, exact, component }]) => (
                                <Route key={routeKey} path={path} exact={exact} component={component} />
                            ))}
                        </Switch>
                    </Suspense>

                    {!isExpanded && <ClickMe className={classes.clickMe} />}

                    <SideBarEditor onSave={handleThemeSave} onExpandToggle={handleExpandToggle} />

                    <Dialog
                        open={isDialogOpen}
                        onClose={handleCloseDialog}
                        maxWidth="md"
                        aria-labelledby="theme-dialog-title"
                        fullWidth
                    >
                        <DialogTitle id="theme-dialog-title">New theme</DialogTitle>
                        <DialogContent>
                            <pre>{JSON.stringify(updatedTheme, null, 4)}</pre>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Close</Button>
                            <Button onClick={handleCloseDialog} color="primary" variant="contained" autoFocus>
                                Download
                            </Button>
                        </DialogActions>
                    </Dialog>
                </MainLayout>
            </ThemeProvider>
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
