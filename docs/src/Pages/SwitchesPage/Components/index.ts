import { lazy } from 'react';

const BasicSwitches = lazy(() => import('./BasicSwitches/BasicSwitches'));
const SwitchLabelPlacement = lazy(() => import('./SwitchLabelPlacement/SwitchLabelPlacement'));
const SwitchSizes = lazy(() => import('./SwitchSizes/SwitchSizes'));
const SwitchesWithLabel = lazy(() => import('./SwitchesWithLabel/SwitchesWithLabel'));

export { BasicSwitches, SwitchSizes, SwitchLabelPlacement, SwitchesWithLabel };
