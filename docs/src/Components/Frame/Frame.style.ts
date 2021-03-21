import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ shape, spacing, palette, shadows }) =>
    createStyles({
        root: {
            '& + $root': {
                marginTop: spacing(4),
            },
        },
        frame: {
            borderRadius: shape.borderRadius,
            boxShadow: shadows[2],
            backgroundColor: palette.background.default,
            color: palette.text.primary,
        },
        topBar: {
            padding: spacing(1, 2),
            backgroundColor: palette.action.hover,

            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: palette.action.hover,
        },
    })
);

export default useStyles;
