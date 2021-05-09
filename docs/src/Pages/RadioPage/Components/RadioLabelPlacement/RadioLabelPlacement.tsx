import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
