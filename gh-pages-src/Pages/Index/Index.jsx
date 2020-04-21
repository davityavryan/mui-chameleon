import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ThemeProvider from 'material-ui-chameleon/ThemeProvider';
import SideBarEditor from 'material-ui-chameleon/SideBarEditor';

const initialTheme = {};

const useStyles = makeStyles(({ spacing }) => ({
    centralized: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    button: {
        margin: spacing(1),
    },
    clickMe: {
        position: 'fixed',
        top: 25,
        right: 75,
    },
}));

function Index() {
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
        <ThemeProvider theme={initialTheme}>
            <CssBaseline />

            <Box component={Paper} className={classes.centralized} p={2}>
                <img width="150" src="img/logo.svg" alt="Material-UI Chameleon" />

                <div>
                    <Button variant="contained" className={classes.button}>
                        Default
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Secondary
                    </Button>
                    <Button variant="contained" color="secondary" disabled className={classes.button}>
                        Disabled
                    </Button>
                </div>
            </Box>

            {!isExpanded && (
                <img className={classes.clickMe} src="img/click-me.svg" alt="Click me" />
            )}

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
                    <Button onClick={handleCloseDialog}>
                        Close
                    </Button>
                    <Button onClick={handleCloseDialog} color="primary" variant="contained" autoFocus>
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

export default () => {
    ReactDOM.render(
        (
            <Suspense fallback={null}>
                <Index />
            </Suspense>
        ),
        document.getElementById('root')
    );
};
