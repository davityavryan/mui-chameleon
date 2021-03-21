import { lazy } from 'react';

const ProgressCircular = lazy(
    () => import(/* webpackChunkName: "component/progress/circular" */ './ProgressCircular/ProgressCircular')
);
const ProgressLinear = lazy(
    () => import(/* webpackChunkName: "component/progress/linear" */ './ProgressLinear/ProgressLinear')
);

export { ProgressCircular, ProgressLinear };
