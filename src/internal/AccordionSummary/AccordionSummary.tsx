/**
 * This is comparability layer for Material-UI v4 and v5 AccordionSummary component
 */

/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react';

import { AccordionSummaryProps } from '@material-ui/core/AccordionSummary';

let AccordionSummary;

try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AccordionSummary = require('@material-ui/core/AccordionSummary/AccordionSummary').default;
} catch {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AccordionSummary = require('@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary').default;
}

export default AccordionSummary as React.FunctionComponent<AccordionSummaryProps>;
