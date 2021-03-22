import { lazy } from 'react';

const Drawers = lazy(() => import(/* webpackChunkName: "component/drawers/variants" */ './Drawers/Drawers'));
const MiniVariantDrawer = lazy(
    () => import(/* webpackChunkName: "component/drawers/mini-variant" */ './MiniVariantDrawer/MiniVariantDrawer')
);

export { Drawers, MiniVariantDrawer };
