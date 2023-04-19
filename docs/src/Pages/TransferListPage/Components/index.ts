import { lazy } from 'react';

const EnhancedTransferList = lazy(() => import('./EnhancedTransferList/EnhancedTransferList'));
const SimpleTransferList = lazy(() => import('./SimpleTransferList/SimpleTransferList'));

export { SimpleTransferList, EnhancedTransferList };
