import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            '& > div > *': {
                margin: spacing(1),
                width: '25ch',
            },
        },
    })
);

export default useStyles;
