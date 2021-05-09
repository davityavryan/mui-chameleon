import { makeStyles, createStyles, ThemeOptions, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, ThemeOptions>(({ shape, spacing, palette }) =>
    createStyles({
        root: {
            '& + $root': {
                marginTop: spacing(4),
            },
        },
        frame: ({ shadows }) => ({
            borderRadius: shape.borderRadius,
            boxShadow: shadows[4],
            backgroundColor: palette.background.default,
            color: palette.text.primary,
        }),
        topBar: {
            padding: spacing(1, 2),
            backgroundColor: palette.action.hover,
            borderTopLeftRadius: shape.borderRadius,
            borderTopRightRadius: shape.borderRadius,

            borderBottomWidth: 1,
            borderBottomStyle: 'solid',
            borderBottomColor: palette.action.hover,
        },
    })
);

export default useStyles;
