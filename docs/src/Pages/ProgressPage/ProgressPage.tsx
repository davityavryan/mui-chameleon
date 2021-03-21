import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { ProgressCircular, ProgressLinear } from './Components';

function ProgressPage() {
    return (
        <Fragment>
            <Frame title="Circular">
                <ProgressCircular />
            </Frame>

            <Frame title="Linear">
                <ProgressLinear />
            </Frame>
        </Fragment>
    );
}

export default ProgressPage;
