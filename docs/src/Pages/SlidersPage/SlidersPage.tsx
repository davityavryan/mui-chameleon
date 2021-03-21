import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { ContinuousSliders, DiscreteSliders, VerticalSliders } from './Components';

function SlidersPage() {
    return (
        <Fragment>
            <Frame title="Continuous sliders">
                <ContinuousSliders />
            </Frame>

            <Frame title="Discrete sliders">
                <DiscreteSliders />
            </Frame>

            <Frame title="Vertical sliders">
                <VerticalSliders />
            </Frame>
        </Fragment>
    );
}

export default SlidersPage;
