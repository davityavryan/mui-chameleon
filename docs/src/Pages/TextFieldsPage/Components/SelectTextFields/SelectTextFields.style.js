import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        '& > div > *': {
            margin: spacing(1),
            width: '25ch',
        },
    },
}));

export default useStyles;
