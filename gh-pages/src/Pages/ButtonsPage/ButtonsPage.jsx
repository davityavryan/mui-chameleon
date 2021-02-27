import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './ButtonsPage.style';

function ButtonsPage() {
    const classes = useStyles();

    return (
        <Box textAlign="center">
            <Typography variant="h5" paragraph>
                Buttons
            </Typography>

            <div className={classes.buttons}>
                <Button variant="text">Default</Button>
                <Button variant="text" color="primary">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="text" color="secondary" disabled>
                    Disabled
                </Button>
            </div>

            <div className={classes.buttons}>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" color="secondary" disabled>
                    Disabled
                </Button>
            </div>

            <div className={classes.buttons}>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled>
                    Disabled
                </Button>
            </div>
        </Box>
    );
}

export default ButtonsPage;
