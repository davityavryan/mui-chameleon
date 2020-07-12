import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex }) => ({
    spinner: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    backdrop: {
        zIndex: zIndex.modal,
    },
}));

export default useStyles;
