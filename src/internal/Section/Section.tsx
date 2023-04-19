import React from 'react';

import { Typography, Accordion } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { themeKeyLabel } from '../../utils/themeKeyLabel';

import { StyledAccordionSummary } from './Section.style';

interface Props {
    title: string;
    secondaryTitle?: string;
    children?: JSX.Element;
}

function Section({ title, secondaryTitle, children = null }: Props) {
    return (
        <Accordion TransitionProps={{ mountOnEnter: true, unmountOnExit: true }}>
            <StyledAccordionSummary
                expandIcon={Boolean(children) ? <ExpandMoreIcon /> : null}
                disabled={!Boolean(children)}
            >
                <Typography variant="subtitle1">{themeKeyLabel(title)}</Typography>

                {secondaryTitle && (
                    <Typography variant="caption" color="textSecondary">
                        {secondaryTitle}
                    </Typography>
                )}
            </StyledAccordionSummary>

            {children && <div>{children}</div>}
        </Accordion>
    );
}

export default Section;
