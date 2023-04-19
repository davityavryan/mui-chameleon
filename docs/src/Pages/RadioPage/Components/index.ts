import { lazy } from 'react';

const RadioButtonsGroup = lazy(() => import('./RadioButtonsGroup/RadioButtonsGroup'));
const RadioLabelPlacement = lazy(() => import('./RadioLabelPlacement/RadioLabelPlacement'));
const StandaloneRadio = lazy(() => import('./StandaloneRadio/StandaloneRadio'));

export { RadioButtonsGroup, StandaloneRadio, RadioLabelPlacement };
