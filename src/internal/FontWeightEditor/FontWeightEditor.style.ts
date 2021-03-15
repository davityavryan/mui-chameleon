import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Property } from 'csstype';

const useStyles = makeStyles<Theme>(({ zIndex }) =>
    createStyles({
        popper: {
            zIndex: `${zIndex.tooltip + 11} !important` as Property.ZIndex, // more than the highest zIndex
        },
    })
);

export default useStyles;
