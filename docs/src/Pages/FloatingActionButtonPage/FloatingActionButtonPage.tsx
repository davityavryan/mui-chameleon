import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { FloatingActionButton, FabSizes } from './Components';

function FloatingActionButtonPage() {
    return (
        <Fragment>
            <Frame title="Floating Action Button">
                <FloatingActionButton />
            </Frame>

            <Frame title="Size">
                <FabSizes />
            </Frame>
        </Fragment>
    );
}

export default FloatingActionButtonPage;
