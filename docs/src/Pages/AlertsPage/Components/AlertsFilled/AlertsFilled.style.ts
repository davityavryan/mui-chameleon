import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            width: '100%',
            margin: spacing(2, 0),

            '& > * + *': {
                marginTop: spacing(1),
            },
        },
    })
);

export default useStyles;
