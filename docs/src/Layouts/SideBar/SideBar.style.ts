import { Drawer, drawerClasses, alpha, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [`& .${drawerClasses.paper}`]: {
        width: theme.spacing(32),
        backdropFilter: `saturate(180%) const StyledBreadcrumb = styled(Chip)(({ theme }) => {blur(${theme.spacing()}px)`,
        backgroundColor: alpha(theme.palette.background.paper, 0.75),
        boxShadow: theme.shadows[4],
    },
}));
