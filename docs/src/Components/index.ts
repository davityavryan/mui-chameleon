import { lazy } from 'react';

import Spinner from './Spinner/Spinner'; // this one should not be lazy loaded

const ErrorBoundary = lazy(() => import('./ErrorBoundary/ErrorBoundary'));
const ErrorBoundaryFallback = lazy(() => import('./ErrorBoundaryFallback/ErrorBoundaryFallback'));
const Frame = lazy(() => import('./Frame/Frame'));
const DocsTheme = lazy(() => import('./DocsTheme/DocsTheme'));

export { ErrorBoundary, ErrorBoundaryFallback, Frame, Spinner, DocsTheme };
