import React, { Fragment } from 'react';

import { Fab } from '@mui/material';
import { Add, Navigation } from '@mui/icons-material';

function FabSizes() {
    return (
        <Fragment>
            <div>
                <Fab sx={{ m: 1 }} size="small" color="secondary" aria-label="add">
                    <Add />
                </Fab>
                <Fab sx={{ m: 1 }} size="medium" color="secondary" aria-label="add">
                    <Add />
                </Fab>
                <Fab sx={{ m: 1 }} color="secondary" aria-label="add">
                    <Add />
                </Fab>
            </div>
            <div>
                <Fab sx={{ m: 1 }} variant="extended" size="small" color="primary" aria-label="add">
                    <Navigation sx={{ m: 1 }} />
                    Extended
                </Fab>
                <Fab sx={{ m: 1 }} variant="extended" size="medium" color="primary" aria-label="add">
                    <Navigation sx={{ m: 1 }} />
                    Extended
                </Fab>
                <Fab sx={{ m: 1 }} variant="extended" color="primary" aria-label="add">
                    <Navigation sx={{ m: 1 }} />
                    Extended
                </Fab>
            </div>
        </Fragment>
    );
}

export default FabSizes;
