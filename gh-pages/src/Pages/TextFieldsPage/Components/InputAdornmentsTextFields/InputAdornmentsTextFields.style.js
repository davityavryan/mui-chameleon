import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: spacing(1),
    },
    withoutLabel: {
        marginTop: spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

export default useStyles;
