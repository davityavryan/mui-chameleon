import { makeStyles, createStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints, spacing, palette }) => {
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
            backdropFilter: `saturate(180%) blur(${spacing()}px)`,
            backgroundColor: fade(palette.background.paper, 0.75),
        },
        nested: {
            paddingLeft: spacing(4),
        },
        doubleNested: {
            paddingLeft: spacing(6),
        },
    });
});

export default useStyles;
