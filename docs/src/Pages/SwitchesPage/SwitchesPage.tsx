import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { BasicSwitches, SwitchSizes, SwitchLabelPlacement, SwitchesWithLabel } from './Components';

function SwitchesPage() {
    return (
        <Fragment>
            <Frame title="Basic switches">
                <BasicSwitches />
            </Frame>

            <Frame title="Switch with FormControlLabel">
                <SwitchesWithLabel />
            </Frame>

            <Frame title="Sizes">
                <SwitchSizes />
            </Frame>

            <Frame title="Label placement">
                <SwitchLabelPlacement />
            </Frame>
        </Fragment>
    );
}

export default SwitchesPage;
