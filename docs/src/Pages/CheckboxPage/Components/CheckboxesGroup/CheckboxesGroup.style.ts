import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            display: 'flex',
        },
        formControl: {
            margin: spacing(3),
        },
    })
);

export default useStyles;
