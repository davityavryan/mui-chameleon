import { lazy } from 'react';

const DateTimePickers = lazy(
    () => import(/* webpackChunkName: "component/date-time/pickers" */ './DateTimePickers/DateTimePickers')
);
const NativePickers = lazy(
    () => import(/* webpackChunkName: "component/date-time/native" */ './NativePickers/NativePickers')
);

export { DateTimePickers, NativePickers };
