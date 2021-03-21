import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: spacing(2),
            },
        },
    })
);

export default useStyles;
