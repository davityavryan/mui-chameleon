import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    buttons: {
        '& > *': {
            marginRight: spacing(2),
            marginBottom: spacing(2),

            '&:last-child': {
                marginRight: 0,
            },
        },
    },
}));

export default useStyles;