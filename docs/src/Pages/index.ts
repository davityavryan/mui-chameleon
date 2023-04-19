import { lazy } from 'react';

const AlertsPage = lazy(() => import('./AlertsPage/AlertsPage'));
const BottomNavigationPage = lazy(() => import('./BottomNavigationPage/BottomNavigationPage'));
const BreadcrumbsPage = lazy(() => import('./BreadcrumbsPage/BreadcrumbsPage'));
const ButtonPage = lazy(() => import('./ButtonPage/ButtonPage'));
const ButtonGroupPage = lazy(() => import('./ButtonGroupPage/ButtonGroupPage'));
const CheckboxPage = lazy(() => import('./CheckboxPage/CheckboxPage'));
const DateTimePage = lazy(() => import('./DateTimePage/DateTimePage'));
const DrawerPage = lazy(() => import('./DrawerPage/DrawerPage'));
const FloatingActionButtonPage = lazy(() => import('./FloatingActionButtonPage/FloatingActionButtonPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
const ProgressPage = lazy(() => import('./ProgressPage/ProgressPage'));
const RadioPage = lazy(() => import('./RadioPage/RadioPage'));
const SelectsPage = lazy(() => import('./SelectsPage/SelectsPage'));
const SignInPage = lazy(() => import('./SignInPage/SignInPage'));
const SlidersPage = lazy(() => import('./SlidersPage/SlidersPage'));
const SwitchesPage = lazy(() => import('./SwitchesPage/SwitchesPage'));
const TablesPage = lazy(() => import('./TablesPage/TablesPage'));
const TextFieldsPage = lazy(() => import('./TextFieldsPage/TextFieldsPage'));
const TransferListPage = lazy(() => import('./TransferListPage/TransferListPage'));
const TypographyPage = lazy(() => import('./TypographyPage/TypographyPage'));

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
