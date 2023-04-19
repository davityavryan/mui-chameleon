import React from 'react';

import { Checkbox, FormGroup, FormControlLabel, FormControl } from '@mui/material';

function CheckboxLabelPlacement() {
    return (
        <FormControl component="fieldset">
            <FormGroup aria-label="position" row>
                <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
                <FormControlLabel
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
            </FormGroup>
        </FormControl>
    );
}

export default CheckboxLabelPlacement;
