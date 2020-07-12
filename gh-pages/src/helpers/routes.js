import { ButtonsPage, NotFoundPage, TypographyPage } from 'Pages';

const ROUTES = {
    // home: {
    //     path: '/',
    //     component: HomePage,
    //     exact: true,
    // },
    buttons: {
        path: '/buttons',
        component: ButtonsPage,
        exact: true,
        navName: 'Buttons',
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
