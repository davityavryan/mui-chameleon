import { lazy } from 'react';

const ProgressCircular = lazy(() => import('./ProgressCircular/ProgressCircular'));
const ProgressLinear = lazy(() => import('./ProgressLinear/ProgressLinear'));

export { ProgressCircular, ProgressLinear };
