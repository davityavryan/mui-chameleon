import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

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
