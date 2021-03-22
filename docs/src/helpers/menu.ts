import { ROUTES } from './routes';

export const MENU = {
    inputs: {
        label: 'Inputs',
        routes: [
            {
                label: 'Button',
                route: ROUTES.button,
            },
            {
                label: 'Button Group',
                route: ROUTES.buttonGroup,
            },
            {
                label: 'Checkbox',
                route: ROUTES.checkbox,
            },
            {
                label: 'Date / Time',
                route: ROUTES.dateTime,
            },
            {
                label: 'Floating Action Button',
                route: ROUTES.floatingActionButton,
            },
            {
                label: 'Radio',
                route: ROUTES.radio,
            },
            {
                label: 'Select',
                route: ROUTES.select,
            },
            {
                label: 'Sliders',
                route: ROUTES.sliders,
            },
            {
                label: 'Switches',
                route: ROUTES.switches,
            },
            {
                label: 'Text Field',
                route: ROUTES.textField,
            },
            {
                label: 'Transfer List',
                route: ROUTES.transferList,
            },
        ],
    },
    navigation: {
        label: 'Navigation',
        routes: [
            {
                label: 'Bottom Navigation',
                route: ROUTES.bottomNavigation,
            },
            {
                label: 'Breadcrumbs',
                route: ROUTES.breadcrumbs,
            },
            {
                label: 'Drawer',
                route: ROUTES.drawer,
            },
        ],
    },
    feedback: {
        label: 'Feedback',
        routes: [
            {
                label: 'Progress',
                route: ROUTES.progress,
            },
        ],
    },
    dataDisplay: {
        label: 'Data Display',
        routes: [
            {
                label: 'Table',
                route: ROUTES.tables,
            },
            {
                label: 'Typography',
                route: ROUTES.typography,
            },
        ],
    },
    lab: {
        label: 'Lab',
        routes: [
            {
                label: 'Alert',
                route: ROUTES.alert,
            },
        ],
    },
    examples: {
        label: 'Examples',
        routes: [
            {
                label: 'SignIn',
                route: ROUTES.signIn,
            },
        ],
    },
};
