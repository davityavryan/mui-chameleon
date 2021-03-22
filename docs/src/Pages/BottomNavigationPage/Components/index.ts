import { lazy } from 'react';

const BasicBottomNavigation = lazy(
    () =>
        import(
            /* webpackChunkName: "component/bottom-navigation/basic" */ './BasicBottomNavigation/BasicBottomNavigation'
        )
);
const BottomNavigationWithNoLabel = lazy(
    () =>
        import(
            /* webpackChunkName: "component/bottom-navigation/with-label" */ './BottomNavigationWithNoLabel/BottomNavigationWithNoLabel'
        )
);

export { BasicBottomNavigation, BottomNavigationWithNoLabel };
