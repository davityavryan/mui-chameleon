import { styled } from '@mui/material';

export const StyledSidebarEditor = styled('div', { shouldForwardProp: (prop: string) => prop !== 'isOpen' })<{
    isOpen: boolean;
}>(({ theme, isOpen }) => ({
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: theme.zIndex.tooltip + 10, // more than the highest zIndex
    width: theme.spacing(isOpen ? 37.5 : 8.5),
    maxHeight: '100vh',
    overflowY: 'auto',
    transition: theme.transitions.create(['width']),
}));
