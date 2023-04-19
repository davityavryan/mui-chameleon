import React from 'react';

import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

function RadioLabelPlacement() {
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" labelPlacement="top" />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="Bottom"
                    labelPlacement="bottom"
                />
                <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioLabelPlacement;
