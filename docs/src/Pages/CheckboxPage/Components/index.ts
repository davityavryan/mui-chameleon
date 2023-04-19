import { lazy } from 'react';

const BasicCheckboxes = lazy(() => import('./BasicCheckboxes/BasicCheckboxes'));
const CheckboxLabels = lazy(() => import('./CheckboxLabels/CheckboxLabels'));
const CheckboxesGroup = lazy(() => import('./CheckboxesGroup/CheckboxesGroup'));
const CheckboxLabelPlacement = lazy(() => import('./CheckboxLabelPlacement/CheckboxLabelPlacement'));

export { BasicCheckboxes, CheckboxesGroup, CheckboxLabels, CheckboxLabelPlacement };
