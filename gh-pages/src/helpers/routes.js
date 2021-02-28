import { ButtonPage, NotFoundPage, TextFieldsPage, TypographyPage } from 'Pages';

const ROUTES = {
    // home: {
    //     path: '/',
    //     component: HomePage,
    //     exact: true,
    // },
    button: {
        path: '/button',
        component: ButtonPage,
        exact: true,
        navName: 'Button',
    },
    textField: {
        path: '/text-field',
        component: TextFieldsPage,
        exact: true,
        navName: 'TextField',
    },
    typography: {
        path: '/typography',
        component: TypographyPage,
        exact: true,
        navName: 'Typography',
    },
    notFound: {
        path: '/*',
        component: NotFoundPage,
        exact: true,
    },
};

export default ROUTES;
