import React, { useCallback } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { Restore, Favorite, LocationOn } from '@mui/icons-material';

function BasicBottomNavigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }, []);

    return (
        <BottomNavigation sx={{ width: '100%', maxWidth: 500 }} value={value} onChange={handleChange} showLabels>
            <BottomNavigationAction label="Recent" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>
    );
}

export default BasicBottomNavigation;
