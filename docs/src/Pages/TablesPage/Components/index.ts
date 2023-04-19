import { lazy } from 'react';

const SortSelectTable = lazy(() => import('./SortSelectTable/SortSelectTable'));
const Tables = lazy(() => import('./Tables/Tables'));

export { SortSelectTable, Tables };
