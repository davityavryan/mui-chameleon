import React from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import useStyles from './DiscreteSliders.style';

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

function DiscreteSliders() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Temperature
            </Typography>

            <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />

            <Typography id="discrete-slider" gutterBottom>
                Disabled
            </Typography>

            <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
                disabled
            />

            <Typography id="marks-slider" gutterBottom>
                With marks
            </Typography>

            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    );
}

export default DiscreteSliders;
