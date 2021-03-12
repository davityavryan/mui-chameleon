import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex }) => ({
    spinner: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    isFixed: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    backdrop: {
        zIndex: zIndex.modal,
    },
}));

export default useStyles;
