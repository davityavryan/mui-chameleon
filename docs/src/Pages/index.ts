import { lazy } from 'react';

const AlertsPage = lazy(() => import(/* webpackChunkName: "pages/alerts" */ 'Pages/AlertsPage/AlertsPage'));
const ButtonPage = lazy(() => import(/* webpackChunkName: "pages/button" */ 'Pages/ButtonPage/ButtonPage'));
const ButtonGroupPage = lazy(
    () => import(/* webpackChunkName: "pages/button-group" */ 'Pages/ButtonGroupPage/ButtonGroupPage')
);
const CheckboxPage = lazy(() => import(/* webpackChunkName: "pages/checkbox" */ './CheckboxPage/CheckboxPage'));
const DateTimePage = lazy(() => import(/* webpackChunkName: "pages/date-time" */ './DateTimePage/DateTimePage'));
const FloatingActionButtonPage = lazy(
    () => import(/* webpackChunkName: "pages/fab" */ './FloatingActionButtonPage/FloatingActionButtonPage')
);
const NotFoundPage = lazy(() => import(/* webpackChunkName: "pages/not-found" */ './NotFoundPage/NotFoundPage'));
const ProgressPage = lazy(() => import(/* webpackChunkName: "pages/progress" */ './ProgressPage/ProgressPage'));
const RadioPage = lazy(() => import(/* webpackChunkName: "pages/radio" */ './RadioPage/RadioPage'));
const SelectsPage = lazy(() => import(/* webpackChunkName: "pages/selects" */ './SelectsPage/SelectsPage'));
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
    ButtonPage,
    ButtonGroupPage,
    CheckboxPage,
    DateTimePage,
    FloatingActionButtonPage,
    NotFoundPage,
    ProgressPage,
    RadioPage,
    SelectsPage,
    SlidersPage,
    SwitchesPage,
    TablesPage,
    TextFieldsPage,
    TransferListPage,
    TypographyPage,
};
