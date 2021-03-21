import { lazy } from 'react';

const RadioButtonsGroup = lazy(
    () => import(/* webpackChunkName: "component/radios/group" */ './RadioButtonsGroup/RadioButtonsGroup')
);
const RadioLabelPlacement = lazy(
    () => import(/* webpackChunkName: "component/radios/label-placement" */ './RadioLabelPlacement/RadioLabelPlacement')
);
const StandaloneRadio = lazy(
    () => import(/* webpackChunkName: "component/radios/standalone" */ './StandaloneRadio/StandaloneRadio')
);

export { RadioButtonsGroup, StandaloneRadio, RadioLabelPlacement };
