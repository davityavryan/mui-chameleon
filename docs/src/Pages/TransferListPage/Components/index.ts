import { lazy } from 'react';

const EnhancedTransferList = lazy(
    () =>
        import(/* webpackChunkName: "component/transfer-list/enhanced" */ './EnhancedTransferList/EnhancedTransferList')
);
const SimpleTransferList = lazy(
    () => import(/* webpackChunkName: "component/transfer-list/simple" */ './SimpleTransferList/SimpleTransferList')
);

export { SimpleTransferList, EnhancedTransferList };
