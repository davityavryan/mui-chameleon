import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing, palette }) =>
    createStyles({
        root: {
            margin: 'auto',
        },
        cardHeader: {
            padding: spacing(1, 2),
        },
        list: {
            width: 200,
            height: 230,
            backgroundColor: palette.background.paper,
            overflow: 'auto',
        },
        button: {
            margin: spacing(0.5, 0),
        },
    })
);

export default useStyles;
