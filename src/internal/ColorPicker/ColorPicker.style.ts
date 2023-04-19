import { styled } from '@mui/material';

export const StyledColorPicker = styled('div')(({ theme, color }) => ({
    width: theme.spacing(3),
    minWidth: theme.spacing(3),
    height: theme.spacing(3),
    padding: 0,
    border: `1px solid ${theme.palette.action.selected}`,

    borderRadius: theme.shape.borderRadius,
    backgroundColor: color,
}));
