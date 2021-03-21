import React, { Fragment } from 'react';

import { IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import { themeKeyLabel } from '../../utils';

interface IProps {
    options?: string[]; // FIXME: not optional
    icons?: React.ElementType[]; // FIXME: not optional
    value: string;
    themeKey: any;
    onChange: (value: string) => void;
}

function BooleanEditor({ options, icons, value, themeKey, onChange }: IProps) {
    const handleClick = () => {
        onChange(value === options[0] ? options[1] : options[0]);
    };

    const Icon = icons[value === options[0] ? 0 : 1];

    return (
        <Fragment>
            <ListItemText data-testid="boolean-editor-label" primary={themeKeyLabel(themeKey)} />

            <ListItemSecondaryAction>
                <IconButton data-testid="boolean-editor-toggle" onClick={handleClick} edge="end">
                    <Icon />
                </IconButton>
            </ListItemSecondaryAction>
        </Fragment>
    );
}

export default BooleanEditor;
