import { lazy } from 'react';

const FloatingActionButton = lazy(
    () => import(/* webpackChunkName: "component/fab/basic" */ './FloatingActionButton/FloatingActionButton')
);
const FabSizes = lazy(() => import(/* webpackChunkName: "component/fab/sizes" */ './FabSizes/FabSizes'));

export { FloatingActionButton, FabSizes };
