import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { BasicBottomNavigation, BottomNavigationWithNoLabel } from './Components';

function BottomNavigationPage() {
    return (
        <Fragment>
            <Frame title="Bottom Navigation">
                <BasicBottomNavigation />
            </Frame>

            <Frame title="Bottom Navigation with no label">
                <BottomNavigationWithNoLabel />
            </Frame>
        </Fragment>
    );
}

export default BottomNavigationPage;
