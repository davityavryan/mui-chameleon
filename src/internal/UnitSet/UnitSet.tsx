import React, { Fragment } from 'react';

import { IconButton, Menu, MenuItem } from '@mui/material';

import { Unit } from '../../types';

export type UnitSetProps = {
    unit: Unit;
    units: Unit[];
    onChange: (unit: Unit) => void;
};

function UnitSet({ unit, units, onChange }: UnitSetProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // TODO: Add unitSet everywhere
    if (units === undefined) {
        console.warn('TODO', unit, units);
        console.trace(999);
        return <Fragment>{unit}</Fragment>;
    }

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (value: Unit) => () => {
        onChange(value);
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton size="small" onClick={handleOpen} aria-controls="unit-menu" aria-haspopup="true">
                {unit}
            </IconButton>
            <Menu id="unit-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {units.map((item) => (
                    <MenuItem key={item} onClick={handleMenuItemClick(item)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    );
}

export default UnitSet;
