import React from 'react';

import { ExpansionPanel, ExpansionPanelSummary, Typography } from '@material-ui/core';

import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

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
        <ExpansionPanel TransitionProps={{ mountOnEnter: true, unmountOnExit: true }}>
            <ExpansionPanelSummary
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
            </ExpansionPanelSummary>

            {children && <div>{children}</div>}
        </ExpansionPanel>
    );
}

export default Section;
