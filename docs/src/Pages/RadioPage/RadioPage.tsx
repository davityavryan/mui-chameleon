import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { RadioButtonsGroup, StandaloneRadio, RadioLabelPlacement } from './Components';

function RadioPage() {
    return (
        <Fragment>
            <Frame title="Radio Group">
                <RadioButtonsGroup />
            </Frame>

            <Frame title="Standalone radio buttons">
                <StandaloneRadio />
            </Frame>

            <Frame title="Label placement">
                <RadioLabelPlacement />
            </Frame>
        </Fragment>
    );
}

export default RadioPage;
