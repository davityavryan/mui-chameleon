import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, { isOpen: boolean }>(({ spacing, transitions, zIndex }) =>
    createStyles({
        root: ({ isOpen }) => ({
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: zIndex.tooltip + 10, // more than the highest zIndex
            width: spacing(isOpen ? 37.5 : 9.5),
            maxHeight: '100vh',
            overflowY: 'auto',
            transition: transitions.create(['width']),
        }),
    })
);

export default useStyles;
