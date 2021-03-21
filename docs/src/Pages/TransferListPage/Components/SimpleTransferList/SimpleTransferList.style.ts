import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            margin: 'auto',
        },
        paper: {
            width: 200,
            height: 230,
            overflow: 'auto',
        },
        button: {
            margin: spacing(0.5, 0),
        },
    })
);

export default useStyles;
