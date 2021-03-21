import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    createStyles({
        pre: {
            whiteSpace: 'pre-wrap',
            color: 'red',
        },
    })
);

export default useStyles;
