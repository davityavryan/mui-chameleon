import { AccordionSummary, accordionSummaryClasses, styled } from '@mui/material';

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    [`& .${accordionSummaryClasses.root}`]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    [`& .${accordionSummaryClasses.content}`]: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
