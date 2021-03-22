import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: spacing(2),
            },
        },
        link: {
            display: 'flex',
        },
        icon: {
            marginRight: spacing(0.5),
            width: 20,
            height: 20,
        },
    })
);

export default useStyles;
