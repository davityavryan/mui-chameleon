import React, { Fragment, useCallback, useEffect, useState } from 'react';

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
    const [localValue, setLocalValue] = useState(value);
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles({ color: localValue });

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleToggleShowHide: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = useCallback<ColorChangeHandler>(
        (color) => {
            const { r, g, b, a } = color.rgb;

            let newColor = `rgba(${r},${g},${b},${a})`;

            if (a === 1) {
                newColor = color.hex;
            }

            setLocalValue(newColor);

            return newColor;
        },
        [setLocalValue]
    );

    const handleChangeComplete = useCallback<ColorChangeHandler>(
        (color, event) => {
            const newColor = handleChange(color, event);

            onChange(newColor);
        },
        [handleChange, onChange]
    );

    // Set Color back from props to reflect outside changes
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

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
                    <SketchPicker color={localValue} onChange={handleChange} onChangeComplete={handleChangeComplete} />
                </Popover>
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default ColorPicker;
