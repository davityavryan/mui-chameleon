import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        margin: {
            margin: spacing(1),
        },
    })
);

export default useStyles;
