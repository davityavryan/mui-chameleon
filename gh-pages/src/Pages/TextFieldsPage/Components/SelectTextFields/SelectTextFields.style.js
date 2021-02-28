import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        '& .MuiTextField-root': {
            margin: spacing(1),
            width: '25ch',
        },
    },
}));

export default useStyles;
