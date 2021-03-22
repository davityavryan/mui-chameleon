import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    createStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    })
);

export default useStyles;
