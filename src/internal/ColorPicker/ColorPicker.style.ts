import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Property } from 'csstype';

const useStyles = makeStyles(({ palette, spacing, zIndex, shape }) =>
    createStyles({
        popover: {
            zIndex: `${zIndex.tooltip + 11} !important` as Property.ZIndex, // more than the highest zIndex
        },
        colorPicker: {
            width: spacing(3),
            minWidth: spacing(3),
            height: spacing(3),
            padding: 0,
            border: `1px solid ${palette.action.selected}`,

            borderRadius: shape.borderRadius,
            backgroundColor: ({ color }: { color: string }) => color,
        },
    })
);

export default useStyles;
