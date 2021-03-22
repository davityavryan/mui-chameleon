import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex, transitions, spacing, breakpoints, mixins }) => {
    const drawerWidth = 240;

    return createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: zIndex.drawer + 1,
            transition: transitions.create(['width', 'margin'], {
                easing: transitions.easing.sharp,
                duration: transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: transitions.create(['width', 'margin'], {
                easing: transitions.easing.sharp,
                duration: transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        staticDrawer: {
            position: 'static',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: transitions.create('width', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: transitions.create('width', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: spacing(7) + 1,
            [breakpoints.up('sm')]: {
                width: spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: spacing(0, 1),
            // necessary for content to be below app bar
            ...mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: spacing(3),
        },
    });
});

export default useStyles;
