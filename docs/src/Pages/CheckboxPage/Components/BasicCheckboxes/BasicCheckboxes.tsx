import React from 'react';

import { Checkbox } from '@mui/material';

function BasicCheckboxes() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <Checkbox
                sx={{ mr: 2, mb: 2 }}
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                sx={{ mr: 2, mb: 2 }}
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Checkbox sx={{ mr: 2, mb: 2 }} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
            <Checkbox sx={{ mr: 2, mb: 2 }} disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
            <Checkbox
                sx={{ mr: 2, mb: 2 }}
                disabled
                checked
                inputProps={{ 'aria-label': 'disabled checked checkbox' }}
            />
            <Checkbox
                sx={{ mr: 2, mb: 2 }}
                defaultChecked
                indeterminate
                inputProps={{ 'aria-label': 'indeterminate checkbox' }}
            />
            <Checkbox
                sx={{ mr: 2, mb: 2 }}
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
            <Checkbox
                sx={{ mb: 2 }}
                defaultChecked
                size="small"
                inputProps={{ 'aria-label': 'checkbox with small size' }}
            />
        </div>
    );
}

export default BasicCheckboxes;
