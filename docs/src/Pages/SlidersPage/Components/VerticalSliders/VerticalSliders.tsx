import React, { Fragment } from 'react';

import { Box, Typography, Slider } from '@mui/material';

function valuetext(value: number) {
    return `${value}°C`;
}

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];

function VerticalSliders() {
    return (
        <Fragment>
            <Typography id="vertical-slider" gutterBottom>
                Temperature
            </Typography>

            <Box sx={{ height: 300 }}>
                <Slider
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    disabled
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    orientation="vertical"
                    defaultValue={[20, 37]}
                    aria-labelledby="vertical-slider"
                    getAriaValueText={valuetext}
                    marks={marks}
                />
            </Box>
        </Fragment>
    );
}

export default VerticalSliders;
