import { lazy } from 'react';

const AlertsDescription = lazy(
    () => import(/* webpackChunkName: "component/alerts/description" */ './AlertsDescription/AlertsDescription')
);
const AlertsFilled = lazy(
    () => import(/* webpackChunkName: "component/alerts/filled" */ './AlertsFilled/AlertsFilled')
);
const AlertsOutlined = lazy(
    () => import(/* webpackChunkName: "component/alerts/outlined" */ './AlertsOutlined/AlertsOutlined')
);
const AlertsStandard = lazy(
    () => import(/* webpackChunkName: "component/alerts/standard" */ './AlertsStandard/AlertsStandard')
);
const AlertsVariants = lazy(
    () => import(/* webpackChunkName: "component/alerts/variants" */ './AlertsStandard/AlertsStandard')
);
const AlertsWithIcons = lazy(
    () => import(/* webpackChunkName: "component/alerts/with-icons" */ './AlertsWithIcons/AlertsWithIcons')
);

export { AlertsDescription, AlertsFilled, AlertsOutlined, AlertsStandard, AlertsVariants, AlertsWithIcons };
