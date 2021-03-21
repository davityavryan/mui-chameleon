import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { SimpleTransferList, EnhancedTransferList } from './Components';

function TransferListPage() {
    return (
        <Fragment>
            <Frame title="Simple Transfer List">
                <SimpleTransferList />
            </Frame>

            <Frame title="Enhanced Transfer List">
                <EnhancedTransferList />
            </Frame>
        </Fragment>
    );
}

export default TransferListPage;
