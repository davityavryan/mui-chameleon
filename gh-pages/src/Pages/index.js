import { lazy } from 'react';

const ButtonsPage = lazy(() => import(/* webpackChunkName: "pages/buttons" */'./ButtonsPage/ButtonsPage'));
// const HomePage = lazy(() => import(/* webpackChunkName: "pages/home" */'./HomePage.ignore/HomePage'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "pages/not-found" */'./NotFoundPage/NotFoundPage'));
const TypographyPage = lazy(() => import(/* webpackChunkName: "pages/typography" */'./TypographyPage/TypographyPage'));

export {
    ButtonsPage,
    // HomePage,
    NotFoundPage,
    TypographyPage,
};
