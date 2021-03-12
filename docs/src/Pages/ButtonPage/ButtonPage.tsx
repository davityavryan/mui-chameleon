import React from 'react';

import Button from '@material-ui/core/Button';

import { Frame } from 'Components';

import useStyles from './ButtonPage.style';

function ButtonPage() {
    const classes = useStyles();

    return (
        <Frame title="Buttons">
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
        </Frame>
    );
}

export default ButtonPage;
