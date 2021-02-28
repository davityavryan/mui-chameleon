import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, spacing, zIndex, shape }) =>
    createStyles({
        popover: {
            zIndex: zIndex.tooltip + 11, // more than the highest zIndex
        },
        colorPicker: {
            width: spacing(3),
            minWidth: spacing(3),
            height: spacing(3),
            padding: 0,
            border: `1px solid ${palette.action.selected}`,

            borderRadius: shape.borderRadius,
            backgroundColor: ({ value }: { value: string }) => value,
        },
    })
);

export default useStyles;
