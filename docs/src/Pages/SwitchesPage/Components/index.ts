import { lazy } from 'react';

const BasicSwitches = lazy(
    () => import(/* webpackChunkName: "component/switches/basic" */ './BasicSwitches/BasicSwitches')
);
const SwitchLabelPlacement = lazy(
    () =>
        import(
            /* webpackChunkName: "component/switches/label-placement" */ './SwitchLabelPlacement/SwitchLabelPlacement'
        )
);
const SwitchSizes = lazy(() => import(/* webpackChunkName: "component/switches/sizes" */ './SwitchSizes/SwitchSizes'));
const SwitchesWithLabel = lazy(
    () => import(/* webpackChunkName: "component/switches/with-label" */ './SwitchesWithLabel/SwitchesWithLabel')
);

export { BasicSwitches, SwitchSizes, SwitchLabelPlacement, SwitchesWithLabel };
