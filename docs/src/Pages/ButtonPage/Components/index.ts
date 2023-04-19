import { lazy } from 'react';

const BasicButtons = lazy(() => import('./BasicButtons/BasicButtons'));
const ButtonsSizes = lazy(() => import('./ButtonsSizes/ButtonsSizes'));
const ButtonsWithIcons = lazy(() => import('./ButtonsWithIcons/ButtonsWithIcons'));
const IconButtons = lazy(() => import('./IconButtons/IconButtons'));

export { BasicButtons, ButtonsSizes, ButtonsWithIcons, IconButtons };
