import { List, ListItem, ListSubheader, styled } from '@mui/material';

export const StyledList = styled(List)(({ theme }) => ({
    position: 'relative',

    width: '100%',
    overflow: 'auto',
    maxHeight: theme.spacing(85),

    backgroundColor: theme.palette.background.paper,
}));

export const StyledListItem = styled(ListItem, { shouldForwardProp: (prop: string) => prop !== 'isTopLevel' })<{
    isTopLevel: boolean;
}>(({ theme, isTopLevel }) => {
    let listItemStyles = `
        justify-content: 'space-between';
    `;

    if (isTopLevel) {
        listItemStyles += `
            padding-top = ${theme.spacing(1.25)};
            padding-bottom = ${theme.spacing(1.25)};
        `;
    }

    return listItemStyles;
});

export const StyledLi = styled('li')({
    backgroundColor: 'inherit',
});

export const StyledListSubHeader = styled(ListSubheader)(({ theme }) => ({
    zIndex: 2,

    color: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey['200'] : theme.palette.grey['700'],
}));

export const StyledUl = styled('ul')({
    backgroundColor: 'inherit',
    padding: 0,
});
