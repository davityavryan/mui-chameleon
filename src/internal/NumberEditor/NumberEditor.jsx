import React, { Fragment } from 'react';

import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ListItemText from '@material-ui/core/ListItemText';
import makeStyles from '@material-ui/core/styles/makeStyles';

import themeKeyLabel from '../../utils/themeKeyLabel';

const useStyles = makeStyles(() => ({
    inputMarginDense: {
        padding: 6.5,
    },
    inputAdornedEnd: {
        paddingRight: 0,
    },
    adornedEnd: {
        paddingRight: 6.5,
    },
}));

function NumberEditor({ value, themeKey, step = 1, min = -Infinity, max = Infinity, onChange, unit = '', ...props }) {
    const classes = useStyles();

    const endAdornment = unit ? <InputAdornment position="end">{unit}</InputAdornment> : null;

    const handleChange = (event) => {
        onChange(Number(event.target.value));
    };

    return (
        <Fragment>
            <ListItemText primary={themeKeyLabel(themeKey)} />

            <Box width={3/10}>
                <OutlinedInput
                    {...props}
                    classes={{
                        inputMarginDense: classes.inputMarginDense,
                        inputAdornedEnd: classes.inputAdornedEnd,
                        adornedEnd: classes.adornedEnd,
                    }}
                    type="number"
                    margin="dense"
                    value={value}
                    onChange={handleChange}
                    inputProps={{ step, min, max }}
                    endAdornment={endAdornment}
                    fullWidth
                />
            </Box>
        </Fragment>
    );
}

export default NumberEditor;
