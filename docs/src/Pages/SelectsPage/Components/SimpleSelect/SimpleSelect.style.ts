import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        formControl: {
            margin: spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: spacing(2),
        },
    })
);

export default useStyles;
