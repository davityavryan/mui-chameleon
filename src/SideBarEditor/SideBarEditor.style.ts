import { makeStyles, createStyles, Direction, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, { isOpen: boolean; muiDirection: Direction }>(({ spacing, transitions, zIndex }) =>
    createStyles({
        root: ({ isOpen, muiDirection }) => ({
            position: 'fixed',
            top: 0,
            zIndex: zIndex.tooltip + 10, // more than the highest zIndex
            width: spacing(isOpen ? 37.5 : 9.5),
            maxHeight: '100vh',
            overflowY: 'auto',
            [muiDirection === 'rtl' ? 'left' : 'right']: 0,
            transition: transitions.create(['width']),
        }),
    })
);

export default useStyles;
