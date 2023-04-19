import { lazy } from 'react';

const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const SideBar = lazy(() => import('./SideBar/SideBar'));

export { MainLayout, SideBar };
