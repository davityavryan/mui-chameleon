import React, { Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import themeKeyLabel from '../../utils/themeKeyLabel';

function BooleanEditor({ options, icons, value, themeKey, onChange }) {
    const handleClick = () => {
        onChange(value === options[0] ? options[1] : options[0]);
    };

    const Icon = icons[value === options[0] ? 0 : 1];

    return (
        <Fragment>
            <ListItemText primary={themeKeyLabel(themeKey)} />

            <ListItemSecondaryAction>
                <IconButton onClick={handleClick} edge="end">
                    <Icon />
                </IconButton>
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default BooleanEditor;
