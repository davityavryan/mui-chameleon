import { lazy } from 'react';

const FloatingActionButton = lazy(() => import('./FloatingActionButton/FloatingActionButton'));
const FabSizes = lazy(() => import('./FabSizes/FabSizes'));

export { FloatingActionButton, FabSizes };
