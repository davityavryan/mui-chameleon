import { lazy } from 'react';

const BasicBottomNavigation = lazy(() => import('./BasicBottomNavigation/BasicBottomNavigation'));
const BottomNavigationWithNoLabel = lazy(() => import('./BottomNavigationWithNoLabel/BottomNavigationWithNoLabel'));

export { BasicBottomNavigation, BottomNavigationWithNoLabel };
