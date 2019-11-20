import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import ThemeProvider from 'material-ui-chameleon/ThemeProvider';
import Editor from 'material-ui-chameleon/Editor';

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
}));

function Index() {
    const classes = useStyles();

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

            <Editor />
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
