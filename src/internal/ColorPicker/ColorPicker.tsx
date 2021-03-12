import React, { Fragment, useCallback, useEffect, useState } from 'react';

import { ColorChangeHandler, ChromePicker, ColorResult } from 'react-color';

import { IconButton, Popover } from '@material-ui/core';

import useStyles from './ColorPicker.style';

interface IProps {
    color: string;
    onChange: (color: string) => void;
}

function ColorPicker({ color, onChange }: IProps) {
    const [localColorValue, setLocalColorValue] = useState(color);
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles({ color: localColorValue });

    const open = Boolean(anchorEl);

    const handleToggleShowHide: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = useCallback<(color: ColorResult) => string>(
        (color) => {
            const { r, g, b, a } = color.rgb;

            let newColor = `rgba(${r},${g},${b},${a})`;

            if (a === 1) {
                newColor = color.hex;
            }

            setLocalColorValue(newColor);

            return newColor;
        },
        [setLocalColorValue]
    );

    const handleChangeComplete = useCallback<ColorChangeHandler>(
        (color) => {
            const newColor = handleChange(color);

            onChange(newColor);
        },
        [handleChange, onChange]
    );

    // Set Color back from props to reflect outside changes
    useEffect(() => {
        setLocalColorValue(color);
    }, [color]);

    return (
        <Fragment>
            <IconButton onClick={handleToggleShowHide} edge="end">
                <div className={classes.colorPicker} />
            </IconButton>

            <Popover
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
                <ChromePicker color={localColorValue} onChange={handleChange} onChangeComplete={handleChangeComplete} />
            </Popover>
        </Fragment>
    );
}

export default ColorPicker;
