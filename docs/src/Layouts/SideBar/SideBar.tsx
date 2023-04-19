import React, { Fragment, useCallback, useState } from 'react';

import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';

import { Box, Collapse, Typography, Divider, Link, List, ListItem, ListItemText, useTheme } from '@mui/material';

import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { entries, MENU } from 'helpers';

import { StyledDrawer } from './SideBar.style';

type OpenedMenus = {
    [K in keyof typeof MENU]: boolean;
};

function SideBar() {
    const theme = useTheme();

    const menuEntries = entries(MENU);

    const [openedMenus, setOpenedMenus] = useState<OpenedMenus>(
        menuEntries.reduce((combiner, [key]) => ({ ...combiner, [key]: true }), {} as OpenedMenus)
    );

    const location = useLocation();

    const navStyles = {
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(32),
            flexShrink: 0,
        },
    };

    const handleToggleMenu = useCallback(
        (key: keyof typeof MENU) => () => {
            setOpenedMenus({
                ...openedMenus,
                [key]: !openedMenus[key],
            });
        },
        [openedMenus]
    );

    return (
        <Box component="nav" sx={navStyles} aria-label="mailbox folders">
            <StyledDrawer variant="permanent" open>
                <Link component={RouterLink} to="/" color="textPrimary" underline="none">
                    <Box display="flex" alignItems="center" px={2} py={1}>
                        <Box pr={1}>
                            <img width="32" height="32" src="img/logo.svg" alt="MUI Chameleon" />
                        </Box>

                        <Typography>Material UI Chameleon</Typography>
                    </Box>
                </Link>

                <Divider />

                <List component="div" dense>
                    {menuEntries.map(([topKey, { label: topLabel, routes }]) => (
                        <Fragment key={topKey}>
                            <ListItem onClick={handleToggleMenu(topKey)} button>
                                <ListItemText primary={topLabel} />

                                {openedMenus[topKey] ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            <Collapse in={openedMenus[topKey]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding dense>
                                    {routes.map(({ label, route }) => (
                                        <ListItem
                                            key={route.path}
                                            component={RouterLink}
                                            to={route.path}
                                            selected={!!matchPath(location.pathname, route.path)}
                                            sx={{ pl: 6 }}
                                            button
                                        >
                                            <ListItemText primary={label} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </Fragment>
                    ))}
                </List>
            </StyledDrawer>
        </Box>
    );
}

export default SideBar;
