import React, { Fragment, memo } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';

import { TUnit } from '../../types';

export type TUnitSetProps = {
    unit: TUnit;
    units: TUnit[];
    onChange: (unit: TUnit) => void;
};

function UnitSet({ unit, units, onChange }: TUnitSetProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    //FIXME: Add unitSet everywhere
    if (units === undefined) {
        console.warn('FIXME');
        return <Fragment>{unit}</Fragment>;
    }

    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (value: TUnit) => () => {
        onChange(value);
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

export default memo(UnitSet);
