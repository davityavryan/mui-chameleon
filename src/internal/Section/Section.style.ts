import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        summaryRoot: {
            paddingLeft: spacing(2),
            paddingRight: spacing(2),
        },
        summaryContent: {
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    })
);

export default useStyles;
