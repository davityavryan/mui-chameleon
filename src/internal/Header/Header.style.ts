import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper, { shouldForwardProp: (prop: string) => !['isDry', 'isOpen'].includes(prop) })<{
    isDry: boolean;
    isOpen: boolean;
}>(({ theme, isDry, isOpen }) => ({
    position: 'sticky',
    top: theme.spacing(),
    zIndex: 1,

    display: 'flex',
    justifyContent: isDry || !isOpen ? 'center' : 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(isOpen ? 2 : 0),
    paddingRight: theme.spacing(isOpen ? 2 : 0),
    margin: theme.spacing(),
    borderRadius: isOpen ? theme.shape.borderRadius : '50%',

    transition: theme.transitions.create(['border-radius', 'padding']),
}));
