import { ComponentType } from 'react';

import {
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
} from 'Pages';

export const ROUTES: { [key: string]: { path: string; Component: ComponentType; index?: boolean } } = {
    alert: {
        path: '/alert',
        Component: AlertsPage,
    },
    bottomNavigation: {
        path: '/bottom-navigation',
        Component: BottomNavigationPage,
    },
    breadcrumbs: {
        path: '/breadcrumbs',
        Component: BreadcrumbsPage,
    },
    button: {
        path: '/',
        Component: ButtonPage,
    },
    buttonGroup: {
        path: '/button-group',
        Component: ButtonGroupPage,
    },
    checkbox: {
        path: '/checkbox',
        Component: CheckboxPage,
    },
    dateTime: {
        path: '/date-time',
        Component: DateTimePage,
    },
    drawer: {
        path: '/drawer',
        Component: DrawerPage,
    },
    floatingActionButton: {
        path: '/floating-action-button',
        Component: FloatingActionButtonPage,
    },
    progress: {
        path: '/progress',
        Component: ProgressPage,
    },
    radio: {
        path: '/radio',
        Component: RadioPage,
    },
    select: {
        path: '/select',
        Component: SelectsPage,
    },
    signIn: {
        path: '/examples/sign-in',
        Component: SignInPage,
    },
    sliders: {
        path: '/slider',
        Component: SlidersPage,
    },
    switches: {
        path: '/switch',
        Component: SwitchesPage,
    },
    tables: {
        path: '/table',
        Component: TablesPage,
    },
    textField: {
        path: '/text-field',
        Component: TextFieldsPage,
    },
    transferList: {
        path: '/transfer-list',
        Component: TransferListPage,
    },
    typography: {
        path: '/typography',
        Component: TypographyPage,
    },
    notFound: {
        path: '/*',
        Component: NotFoundPage,
    },
};
