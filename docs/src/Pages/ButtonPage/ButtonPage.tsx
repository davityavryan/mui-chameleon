import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { BasicButtons, ButtonsSizes, ButtonsWithIcons, IconButtons } from './Components';

function ButtonPage() {
    return (
        <Fragment>
            <Frame title="Buttons">
                <BasicButtons />
            </Frame>

            <Frame title="Button sizes">
                <ButtonsSizes />
            </Frame>

            <Frame title="Button with icons and label">
                <ButtonsWithIcons />
            </Frame>

            <Frame title="Icon buttons">
                <IconButtons />
            </Frame>
        </Fragment>
    );
}

export default ButtonPage;
