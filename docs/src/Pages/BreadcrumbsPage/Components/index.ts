import { lazy } from 'react';

const SimpleBreadcrumbs = lazy(
    () => import(/* webpackChunkName: "component/breadcrumbs/simple" */ './SimpleBreadcrumbs/SimpleBreadcrumbs')
);

export { SimpleBreadcrumbs };
