import { lazy } from 'react';

const AlertsDescription = lazy(() => import('./AlertsDescription/AlertsDescription'));
const AlertsFilled = lazy(() => import('./AlertsFilled/AlertsFilled'));
const AlertsOutlined = lazy(() => import('./AlertsOutlined/AlertsOutlined'));
const AlertsStandard = lazy(() => import('./AlertsStandard/AlertsStandard'));
const AlertsVariants = lazy(() => import('./AlertsStandard/AlertsStandard'));
const AlertsWithIcons = lazy(() => import('./AlertsWithIcons/AlertsWithIcons'));

export { AlertsDescription, AlertsFilled, AlertsOutlined, AlertsStandard, AlertsVariants, AlertsWithIcons };
