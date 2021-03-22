import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { Drawers, MiniVariantDrawer } from './Components';

function DrawerPage() {
    return (
        <Fragment>
            <Frame title="Drawer">
                <Drawers />
            </Frame>

            <Frame title="Mini variant drawer" p={0}>
                <MiniVariantDrawer />
            </Frame>
        </Fragment>
    );
}

export default DrawerPage;
