import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { SketchPicker } from 'react-color';

import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import makeStyles from '@material-ui/core/styles/makeStyles';

import themeKeyLabel from '../../utils/themeKeyLabel';

const useStyles = makeStyles(({ palette, spacing, zIndex, shape }) => {
    return {
        colorPicker: {
            width: spacing(3),
            minWidth: spacing(3),
            height: spacing(3),
            padding: 0,
            border: `1px solid ${palette.action.selected}`,

            borderRadius: shape.borderRadius,
            backgroundColor: ({ value }) => value,
        },
    };
});

function ColorPicker({ value, themeKey, onChange }) {
    const classes = useStyles({ value });

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleToggleShowHide = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (color) => {
        const { r, g, b, a } = color.rgb;

        if (a === 1) {
            onChange(color.hex);
        } else {
            onChange(`rgba(${r},${g},${b},${a})`);
        }
    };

    return (
        <Fragment>
            <ListItemText primary={themeKeyLabel(themeKey)} />

            <ListItemSecondaryAction>
                <IconButton onClick={handleToggleShowHide} edge="end" aria-describedby={id}>
                    <div className={classes.colorPicker} />
                </IconButton>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    styles={{
                        zIndex: 1500,
                    }}
                >
                    <SketchPicker color={value} onChangeComplete={handleChange} />
                </Popover>
            </ListItemSecondaryAction>
        </Fragment>
    );
}

ColorPicker.propTypes = {
    value: PropTypes.string.isRequired,
    themeKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ColorPicker;
