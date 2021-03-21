import { lazy } from 'react';

const BasicButtonGroup = lazy(
    () => import(/* webpackChunkName: "component/button-group/basic" */ './BasicButtonGroup/BasicButtonGroup')
);
const ButtonsGroupSizes = lazy(
    () => import(/* webpackChunkName: "component/button-group/sizes" */ './ButtonsGroupSizes/ButtonsGroupSizes')
);
const ButtonVerticalGroup = lazy(
    () => import(/* webpackChunkName: "component/button-group/vertical" */ './ButtonVerticalGroup/ButtonVerticalGroup')
);
const SplitButtonGroup = lazy(
    () => import(/* webpackChunkName: "component/button-group/split" */ './SplitButtonGroup/SplitButtonGroup')
);

export { BasicButtonGroup, ButtonsGroupSizes, ButtonVerticalGroup, SplitButtonGroup };
