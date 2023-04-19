import React, { Fragment } from 'react';

import { TextField, TextFieldProps, Unstable_Grid2 as Grid } from '@mui/material';

const variants: TextFieldProps['variant'][] = ['standard', 'outlined', 'filled'];

function NativePickers() {
    return (
        <Fragment>
            {variants.map((variant) => (
                <Grid key={variant} justifyContent="space-around" spacing={4} container>
                    <Grid sm={4}>
                        <TextField
                            type="date"
                            label="Birthday"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant={variant}
                            fullWidth
                        />
                    </Grid>

                    <Grid sm={4}>
                        <TextField
                            type="datetime-local"
                            label="Next appointment"
                            defaultValue="2017-05-24T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant={variant}
                            fullWidth
                        />
                    </Grid>

                    <Grid sm={4}>
                        <TextField
                            type="time"
                            label="Alarm clock"
                            defaultValue="07:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant={variant}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            ))}
        </Fragment>
    );
}

export default NativePickers;
