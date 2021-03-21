import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            display: 'flex',
            margin: spacing(2, 0),

            '& > * + *': {
                marginLeft: spacing(2),
            },
        },
    })
);

export default useStyles;
