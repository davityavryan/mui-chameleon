import React, { Fragment, memo, useCallback, useState } from 'react';

import { entries } from 'type-assert-object';

import { Link, matchPath, useLocation } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MUILink from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { MENU } from 'helpers';

import useStyles from './SideBar.style';

type IOpenedMenus = {
    [K in keyof typeof MENU]: boolean;
};

function SideBar() {
    const classes = useStyles();

    const menuEntries = entries(MENU);

    const [openedMenus, setOpenedMenus] = useState<IOpenedMenus>(
        menuEntries.reduce((combiner, [key]) => ({ ...combiner, [key]: true }), {} as IOpenedMenus)
    );

    const location = useLocation();

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
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                <MUILink component={Link} to="/" color="textPrimary" underline="none">
                    <Box display="flex" alignItems="center" px={2} py={1}>
                        <Box pr={1}>
                            <img width="32" height="32" src="img/logo.svg" alt="Material-UI Chameleon" />
                        </Box>

                        <Typography>Material UI Chameleon</Typography>
                    </Box>
                </MUILink>

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
                                            component={Link}
                                            className={classes.doubleNested}
                                            to={route.path}
                                            selected={!!matchPath(location.pathname, route.path)}
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
            </Drawer>
        </nav>
    );
}

export default memo(SideBar);
