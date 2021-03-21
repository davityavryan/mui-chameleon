import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import useStyles from './ContinuousSliders.style';

function ContinuousSliders() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <div className={classes.root}>
            <Typography id="continuous-slider" gutterBottom>
                Volume
            </Typography>
            <Grid container spacing={2}>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
            <Typography id="disabled-slider" gutterBottom>
                Disabled slider
            </Typography>
            <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
        </div>
    );
}

export default ContinuousSliders;
