import React, { Fragment } from 'react';

import { ListItemText, ListItemSecondaryAction } from '@mui/material';

import ColorPicker from '../ColorPicker/ColorPicker';
import { themeKeyLabel } from '../../utils/themeKeyLabel';

interface Props {
    value: string;
    themeKey: string;
    onChange: (color: string) => void;
}

function ColorEditor({ value, themeKey, onChange }: Props) {
    return (
        <Fragment>
            <ListItemText primary={themeKeyLabel(themeKey)} />

            <ListItemSecondaryAction>
                <ColorPicker color={value} onChange={onChange} />
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default ColorEditor;
