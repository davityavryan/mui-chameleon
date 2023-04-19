import { lazy } from 'react';

const BasicButtonGroup = lazy(() => import('./BasicButtonGroup/BasicButtonGroup'));
const ButtonsGroupSizes = lazy(() => import('./ButtonsGroupSizes/ButtonsGroupSizes'));
const ButtonVerticalGroup = lazy(() => import('./ButtonVerticalGroup/ButtonVerticalGroup'));
const SplitButtonGroup = lazy(() => import('./SplitButtonGroup/SplitButtonGroup'));

export { BasicButtonGroup, ButtonsGroupSizes, ButtonVerticalGroup, SplitButtonGroup };
