import React, { useCallback } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import { Folder, Restore, Favorite, LocationOn } from '@mui/icons-material';

function BottomNavigationWithNoLabel() {
    const [value, setValue] = React.useState(0);

    const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }, []);

    return (
        <BottomNavigation sx={{ width: '100%', maxWidth: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction label="Recent" value="recent" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
        </BottomNavigation>
    );
}

export default BottomNavigationWithNoLabel;
