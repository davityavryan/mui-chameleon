import React from 'react';

import { FormGroup, FormControlLabel, FormControl, Switch } from '@mui/material';

function SwitchLabelPlacement() {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Switch color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" />
            </FormGroup>
        </FormControl>
    );
}

export default SwitchLabelPlacement;
