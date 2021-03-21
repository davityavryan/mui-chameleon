import { lazy } from 'react';

const MultipleSelect = lazy(
    () => import(/* webpackChunkName: "component/select/multiple" */ './MultipleSelect/MultipleSelect')
);
const NativeSelects = lazy(
    () => import(/* webpackChunkName: "component/select/native" */ './NativeSelects/NativeSelects')
);
const SimpleSelect = lazy(
    () => import(/* webpackChunkName: "component/select/simple" */ './SimpleSelect/SimpleSelect')
);

export { MultipleSelect, NativeSelects, SimpleSelect };
