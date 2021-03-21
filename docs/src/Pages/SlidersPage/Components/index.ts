import { lazy } from 'react';

const ContinuousSliders = lazy(
    () => import(/* webpackChunkName: "component/sliders/continuous" */ './ContinuousSliders/ContinuousSliders')
);
const DiscreteSliders = lazy(
    () => import(/* webpackChunkName: "component/sliders/discrete" */ './DiscreteSliders/DiscreteSliders')
);
const VerticalSliders = lazy(
    () => import(/* webpackChunkName: "component/sliders/vertical" */ './VerticalSliders/VerticalSliders')
);

export { ContinuousSliders, DiscreteSliders, VerticalSliders };
