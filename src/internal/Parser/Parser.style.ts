import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles/withStyles/withStyles';

const useStyles = makeStyles<Theme, { isTopLevel: boolean }>(({ palette, spacing }) =>
    createStyles({
        root: {
            position: 'relative',

            width: '100%',
            overflow: 'auto',
            maxHeight: spacing(85),

            backgroundColor: palette.background.paper,
        },
        listItem: ({ isTopLevel }) => {
            const listItemStyles: CSSProperties = {
                justifyContent: 'space-between',
            };

            if (isTopLevel) {
                listItemStyles.paddingTop = spacing(1.25);
                listItemStyles.paddingBottom = spacing(1.25);
            }

            return listItemStyles;
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        listSubHeader: {
            zIndex: 2,

            color: palette.type === 'light' ? palette.common.black : palette.common.white,
            backgroundColor: palette.type === 'light' ? palette.grey['200'] : palette.grey['700'],
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
    })
);

export default useStyles;
