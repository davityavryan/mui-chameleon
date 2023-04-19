import React from 'react';

import { Radio } from '@mui/material';

function StandaloneRadio() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Radio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
            />
            <Radio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'C' }}
            />
            <Radio
                checked={selectedValue === 'd'}
                onChange={handleChange}
                value="d"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'D' }}
            />
            <Radio
                checked={selectedValue === 'e'}
                onChange={handleChange}
                value="e"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'E' }}
                size="small"
            />
        </div>
    );
}

export default StandaloneRadio;
