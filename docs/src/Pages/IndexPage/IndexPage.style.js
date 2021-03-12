import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ zIndex }) => ({
    '@global': {
        '#root': {
            display: 'flex',
            minHeight: '100vh',
        },
    },
    clickMe: {
        position: 'fixed',
        top: 25,
        right: 75,
        zIndex: zIndex.tooltip,
    },
}));

export default useStyles;
