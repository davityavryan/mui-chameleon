import React from 'react';

import { Typography } from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

import { Accordion, AccordionSummary } from '..';
import { themeKeyLabel } from '../../utils';

import useStyles from './Section.style';

interface IProps {
    title: string;
    secondaryTitle?: string;
    children?: JSX.Element;
}

function Section({ title, secondaryTitle, children = null }: IProps) {
    const classes = useStyles();

    return (
        <Accordion TransitionProps={{ mountOnEnter: true, unmountOnExit: true }}>
            <AccordionSummary
                classes={{ root: classes.summaryRoot, content: classes.summaryContent }}
                expandIcon={Boolean(children) ? <ExpandMoreIcon /> : null}
                disabled={!Boolean(children)}
            >
                <Typography variant="subtitle1">{themeKeyLabel(title)}</Typography>

                {secondaryTitle && (
                    <Typography variant="caption" color="textSecondary">
                        {secondaryTitle}
                    </Typography>
                )}
            </AccordionSummary>

            {children && <div>{children}</div>}
        </Accordion>
    );
}

export default Section;
