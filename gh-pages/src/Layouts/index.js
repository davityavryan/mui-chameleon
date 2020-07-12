import { lazy } from 'react';

const MainLayout = lazy(() => import(/* webpackChunkName: "layouts/main-layout" */'./MainLayout/MainLayout'));
const SideBar = lazy(() => import(/* webpackChunkName: "layouts/side-bar" */'./SideBar/SideBar'));

export {
    MainLayout,
    SideBar,
};
