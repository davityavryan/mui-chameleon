import React from 'react';

import { Box, Typography, Slider, Unstable_Grid2 as Grid } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

function ContinuousSliders() {
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Typography id="continuous-slider" gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid>
                    <VolumeDown />
                </Grid>
                <Grid xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid>
                    <VolumeUp />
                </Grid>
            </Grid>
            <Typography id="disabled-slider" gutterBottom>
                Disabled slider
            </Typography>
            <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
        </Box>
    );
}

export default ContinuousSliders;
