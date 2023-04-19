import React from 'react';

import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { CheckBox as CheckBoxIcon, CheckBoxOutlineBlank, Favorite, FavoriteBorder } from '@mui/icons-material';

function CheckboxLabels() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Secondary"
            />
            <FormControlLabel
                control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
                label="Primary"
            />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
            <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
            <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
            <FormControlLabel
                control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" indeterminate />}
                label="Indeterminate"
            />
            <FormControlLabel
                control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                label="Custom icon"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlank fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        name="checkedI"
                    />
                }
                label="Custom size"
            />
        </FormGroup>
    );
}

export default CheckboxLabels;
