import { lazy } from 'react';

import Spinner from './Spinner/Spinner'; // this one should not be lazy loaded

const ErrorBoundary = lazy(() => (
    import(/* webpackChunkName: "component/error-boundary" */'./ErrorBoundary/ErrorBoundary')
));
const ErrorBoundaryFallback = lazy(() => (
    import(/* webpackChunkName: "component/error-boundary-fallback" */'./ErrorBoundaryFallback/ErrorBoundaryFallback')
));

export {
    ErrorBoundary,
    ErrorBoundaryFallback,
    Spinner,
};
