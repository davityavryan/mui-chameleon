import { makeStyles, createStyles, lighten } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles(({ spacing, palette }) =>
    createStyles({
        root: {
            paddingLeft: spacing(2),
            paddingRight: spacing(1),
        },
        highlight:
            palette.type === 'light'
                ? {
                      color: palette.secondary.main,
                      backgroundColor: lighten(palette.secondary.light, 0.85),
                  }
                : {
                      color: palette.text.primary,
                      backgroundColor: palette.secondary.dark,
                  },
        title: {
            flex: '1 1 100%',
        },
    })
);

const useStyles = makeStyles(({ spacing }) =>
    createStyles({
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    })
);

export { useToolbarStyles, useStyles };
