import React, { Suspense, lazy } from 'react';

import { createRoot } from 'react-dom/client';

import { Spinner } from './Components';

const IndexPage = lazy(() => import('Pages/IndexPage/IndexPage'));

const root = createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<Spinner isFixed />}>
        <IndexPage />
    </Suspense>
);
