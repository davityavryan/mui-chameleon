import { lazy } from 'react';

const ContinuousSliders = lazy(() => import('./ContinuousSliders/ContinuousSliders'));
const DiscreteSliders = lazy(() => import('./DiscreteSliders/DiscreteSliders'));
const VerticalSliders = lazy(() => import('./VerticalSliders/VerticalSliders'));

export { ContinuousSliders, DiscreteSliders, VerticalSliders };
