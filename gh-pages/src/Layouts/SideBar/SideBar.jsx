import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ROUTES from 'helpers/routes';

import useStyles from './SideBar.style';

function SideBar() {
    const classes = useStyles();

    const navRoutes = Object.entries(ROUTES).filter(([, { navName }]) => !!navName);

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                <Box display="flex" alignItems="center" px={2} py={1}>
                    <Box pr={1}>
                        <img width="32" height="32" src="img/logo.svg" alt="Material-UI Chameleon" />
                    </Box>

                    <Typography>Material UI Chameleon</Typography>
                </Box>

                <Divider />

                <List>
                    {navRoutes.map(([key, { path, navName }]) => (
                        <ListItem component={Link} key={key} to={path} button>
                            <ListItemText primary={navName} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </nav>
    );
}

export default memo(SideBar);
