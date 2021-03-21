import { lazy } from 'react';

const SortSelectTable = lazy(
    () => import(/* webpackChunkName: "component/tables/sort-select" */ './SortSelectTable/SortSelectTable')
);
const Tables = lazy(() => import(/* webpackChunkName: "component/tables/basic" */ './Tables/Tables'));

export { SortSelectTable, Tables };
