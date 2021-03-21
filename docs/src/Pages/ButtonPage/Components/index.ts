import { lazy } from 'react';

const BasicButtons = lazy(
    () => import(/* webpackChunkName: "component/buttons/basic" */ './BasicButtons/BasicButtons')
);
const ButtonsSizes = lazy(
    () => import(/* webpackChunkName: "component/buttons/sizes" */ './ButtonsSizes/ButtonsSizes')
);
const ButtonsWithIcons = lazy(
    () => import(/* webpackChunkName: "component/buttons/with-icons" */ './ButtonsWithIcons/ButtonsWithIcons')
);
const IconButtons = lazy(() => import(/* webpackChunkName: "component/buttons/icons" */ './IconButtons/IconButtons'));

export { BasicButtons, ButtonsSizes, ButtonsWithIcons, IconButtons };
