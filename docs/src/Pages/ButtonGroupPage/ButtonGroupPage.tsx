import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { BasicButtonGroup, ButtonsGroupSizes, ButtonVerticalGroup, SplitButtonGroup } from './Components';

function ButtonGroupPage() {
    return (
        <Fragment>
            <Frame title="Basic button group">
                <BasicButtonGroup />
            </Frame>

            <Frame title="Sizes and colors">
                <ButtonsGroupSizes />
            </Frame>

            <Frame title="Vertical group">
                <ButtonVerticalGroup />
            </Frame>

            <Frame title="Split button">
                <SplitButtonGroup />
            </Frame>
        </Fragment>
    );
}

export default ButtonGroupPage;
