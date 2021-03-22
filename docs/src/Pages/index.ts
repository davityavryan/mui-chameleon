import { lazy } from 'react';

const AlertsPage = lazy(() => import(/* webpackChunkName: "pages/alerts" */ './AlertsPage/AlertsPage'));
const BottomNavigationPage = lazy(
    () => import(/* webpackChunkName: "pages/bottom-navigation" */ './BottomNavigationPage/BottomNavigationPage')
);
const BreadcrumbsPage = lazy(
    () => import(/* webpackChunkName: "pages/breadcrumbs" */ './BreadcrumbsPage/BreadcrumbsPage')
);
const ButtonPage = lazy(() => import(/* webpackChunkName: "pages/button" */ './ButtonPage/ButtonPage'));
const ButtonGroupPage = lazy(
    () => import(/* webpackChunkName: "pages/button-group" */ './ButtonGroupPage/ButtonGroupPage')
);
const CheckboxPage = lazy(() => import(/* webpackChunkName: "pages/checkbox" */ './CheckboxPage/CheckboxPage'));
const DateTimePage = lazy(() => import(/* webpackChunkName: "pages/date-time" */ './DateTimePage/DateTimePage'));
const DrawerPage = lazy(() => import(/* webpackChunkName: "pages/drawer" */ './DrawerPage/DrawerPage'));
const FloatingActionButtonPage = lazy(
    () => import(/* webpackChunkName: "pages/fab" */ './FloatingActionButtonPage/FloatingActionButtonPage')
);
const NotFoundPage = lazy(() => import(/* webpackChunkName: "pages/not-found" */ './NotFoundPage/NotFoundPage'));
const ProgressPage = lazy(() => import(/* webpackChunkName: "pages/progress" */ './ProgressPage/ProgressPage'));
const RadioPage = lazy(() => import(/* webpackChunkName: "pages/radio" */ './RadioPage/RadioPage'));
const SelectsPage = lazy(() => import(/* webpackChunkName: "pages/selects" */ './SelectsPage/SelectsPage'));
const SignInPage = lazy(() => import(/* webpackChunkName: "pages/sign-in" */ './SignInPage/SignInPage'));
const SlidersPage = lazy(() => import(/* webpackChunkName: "pages/sliders" */ './SlidersPage/SlidersPage'));
const SwitchesPage = lazy(() => import(/* webpackChunkName: "pages/switches" */ './SwitchesPage/SwitchesPage'));
const TablesPage = lazy(() => import(/* webpackChunkName: "pages/table" */ './TablesPage/TablesPage'));
const TextFieldsPage = lazy(() => import(/* webpackChunkName: "pages/text-field" */ './TextFieldsPage/TextFieldsPage'));
const TransferListPage = lazy(
    () => import(/* webpackChunkName: "pages/transfer-list" */ './TransferListPage/TransferListPage')
);
const TypographyPage = lazy(() => import(/* webpackChunkName: "pages/typography" */ './TypographyPage/TypographyPage'));

export {
    AlertsPage,
    BottomNavigationPage,
    BreadcrumbsPage,
    ButtonPage,
    ButtonGroupPage,
    CheckboxPage,
    DateTimePage,
    DrawerPage,
    FloatingActionButtonPage,
    NotFoundPage,
    ProgressPage,
    RadioPage,
    SelectsPage,
    SignInPage,
    SlidersPage,
    SwitchesPage,
    TablesPage,
    TextFieldsPage,
    TransferListPage,
    TypographyPage,
};
