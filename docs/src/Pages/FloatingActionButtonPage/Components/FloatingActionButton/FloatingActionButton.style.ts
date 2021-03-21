import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        root: {
            '& > *': {
                margin: spacing(1),
            },
        },
        extendedIcon: {
            marginRight: spacing(1),
        },
    })
);

export default useStyles;
