import React, { Fragment, useState } from 'react';

import { ColorChangeHandler, SketchPicker } from 'react-color';

import { IconButton, Popover, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import { themeKeyLabel } from '../../utils';

import useStyles from './ColorPicker.style';

interface IProps {
    value: string;
    themeKey: any;
    onChange: any;
}

// ColorPicker.propTypes = {
//     value: PropTypes.string.isRequired,
//     themeKey: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };

function ColorPicker({ value, themeKey, onChange }: IProps) {
    const classes = useStyles({ value });

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleToggleShowHide: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange: ColorChangeHandler = (color) => {
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
                    className={classes.popover}
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
                >
                    <SketchPicker color={value} onChangeComplete={handleChange} />
                </Popover>
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default ColorPicker;
