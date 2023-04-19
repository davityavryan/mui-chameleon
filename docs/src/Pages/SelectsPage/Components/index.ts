import { lazy } from 'react';

const MultipleSelect = lazy(() => import('./MultipleSelect/MultipleSelect'));
const NativeSelects = lazy(() => import('./NativeSelects/NativeSelects'));
const SimpleSelect = lazy(() => import('./SimpleSelect/SimpleSelect'));

export { MultipleSelect, NativeSelects, SimpleSelect };
