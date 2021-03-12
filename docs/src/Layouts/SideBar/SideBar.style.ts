import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
    const drawerWidth = spacing(30);

    return createStyles({
        drawer: {
            [breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
    });
});

export default useStyles;
