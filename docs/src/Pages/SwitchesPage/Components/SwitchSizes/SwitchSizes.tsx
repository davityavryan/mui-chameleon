import React from 'react';

import { Switch, FormGroup, FormControlLabel } from '@mui/material';

function SwitchSizes() {
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                label="Small"
            />
            <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Normal" />
        </FormGroup>
    );
}

export default SwitchSizes;
