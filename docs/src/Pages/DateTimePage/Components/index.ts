import { lazy } from 'react';

const DateTimePickers = lazy(() => import('./DateTimePickers/DateTimePickers'));
const NativePickers = lazy(() => import('./NativePickers/NativePickers'));

export { DateTimePickers, NativePickers };
