import { lazy } from 'react';

const ButtonPage = lazy(() => import(/* webpackChunkName: "pages/button" */ 'Pages/ButtonPage/ButtonPage'));
// const HomePage = lazy(() => import(/* webpackChunkName: "pages/home" */'./HomePage.ignore/HomePage'));
const NotFoundPage = lazy(() => import(/* webpackChunkName: "pages/not-found" */ './NotFoundPage/NotFoundPage'));
const TextFieldsPage = lazy(() => import(/* webpackChunkName: "pages/text-field" */ './TextFieldsPage/TextFieldsPage'));
const TypographyPage = lazy(() => import(/* webpackChunkName: "pages/typography" */ './TypographyPage/TypographyPage'));

export {
    ButtonPage,
    // HomePage,
    NotFoundPage,
    TextFieldsPage,
    TypographyPage,
};
