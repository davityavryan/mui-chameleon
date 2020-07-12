import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) => ({
    buttons: {
        '& > *': {
            marginRight: spacing(1),
            marginBottom: spacing(1),

            '&:last-child': {
                marginRight: 0,
            },
        },
    },
}));

export default useStyles;
