import { lazy } from 'react';

const Drawers = lazy(() => import('./Drawers/Drawers'));
const MiniVariantDrawer = lazy(() => import('./MiniVariantDrawer/MiniVariantDrawer'));

export { Drawers, MiniVariantDrawer };
