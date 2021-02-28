import { lazy } from 'react';

const IconsTextFields = lazy(() =>
    import(/* webpackChunkName: "component/text-field/icons" */ './IconsTextFields/IconsTextFields')
);
const InputAdornmentsTextFields = lazy(() =>
    import(
        /* webpackChunkName: "component/text-field/input-adornments" */ './InputAdornmentsTextFields/InputAdornmentsTextFields'
    )
);
const MultilineTextFields = lazy(() =>
    import(/* webpackChunkName: "component/text-field/multiline" */ './MultilineTextFields/MultilineTextFields')
);
const SelectTextFields = lazy(() =>
    import(/* webpackChunkName: "component/text-field/select" */ './SelectTextFields/SelectTextFields')
);
const VariantsTextFields = lazy(() =>
    import(/* webpackChunkName: "component/text-field/variants" */ './VariantsTextFields/VariantsTextFields')
);

export { IconsTextFields, InputAdornmentsTextFields, MultilineTextFields, SelectTextFields, VariantsTextFields };
