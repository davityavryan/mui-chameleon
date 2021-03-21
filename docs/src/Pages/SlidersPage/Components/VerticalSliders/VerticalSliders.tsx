import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import useStyles from './VerticalSliders.style';

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
    const classes = useStyles();

    return (
        <Fragment>
            <Typography id="vertical-slider" gutterBottom>
                Temperature
            </Typography>

            <div className={classes.root}>
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
            </div>
        </Fragment>
    );
}

export default VerticalSliders;
