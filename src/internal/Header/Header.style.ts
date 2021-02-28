import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, { isDry: boolean; isOpen: boolean }>(({ spacing, transitions, shape }) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: ({ isDry, isOpen }) => (isDry || !isOpen ? 'center' : 'space-between'),
            alignItems: 'center',
            paddingLeft: ({ isOpen }) => spacing(isOpen ? 2 : 1.25),
            paddingRight: ({ isOpen }) => spacing(isOpen ? 2 : 1.25),
            margin: spacing(),
            borderRadius: ({ isOpen }) => (isOpen ? shape.borderRadius : '50%'),
            transition: transitions.create(['border-radius', 'padding']),
        },
    })
);

export default useStyles;
