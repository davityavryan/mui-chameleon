import { lazy } from 'react';

const BasicCheckboxes = lazy(
    () => import(/* webpackChunkName: "component/checkbox/basic" */ './BasicCheckboxes/BasicCheckboxes')
);
const CheckboxLabels = lazy(
    () => import(/* webpackChunkName: "component/checkbox/with-labels" */ './CheckboxLabels/CheckboxLabels')
);
const CheckboxesGroup = lazy(
    () => import(/* webpackChunkName: "component/checkbox/group" */ './CheckboxesGroup/CheckboxesGroup')
);
const CheckboxLabelPlacement = lazy(
    () =>
        import(
            /* webpackChunkName: "component/checkbox/label-placement" */ './CheckboxLabelPlacement/CheckboxLabelPlacement'
        )
);

export { BasicCheckboxes, CheckboxesGroup, CheckboxLabels, CheckboxLabelPlacement };
