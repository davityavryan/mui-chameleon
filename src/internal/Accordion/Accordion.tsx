/**
 * This is comparability layer for Material-UI v4 and v5 Accordion component
 */

/* eslint-disable @typescript-eslint/no-var-requires */

import React from 'react';

import { AccordionProps } from '@material-ui/core/Accordion';

let Accordion;

try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Accordion = require('@material-ui/core/Accordion/Accordion').default;
} catch {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Accordion = require('@material-ui/core/ExpansionPanel/ExpansionPanel').default;
}

export default Accordion as React.FunctionComponent<AccordionProps>;
