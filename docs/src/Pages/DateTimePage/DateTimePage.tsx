import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { DateTimePickers, NativePickers } from './Components';

function DateTimePage() {
    return (
        <Fragment>
            <Frame title="@material-ui/pickers">
                <DateTimePickers />
            </Frame>

            <Frame title="Native pickers">
                <NativePickers />
            </Frame>
        </Fragment>
    );
}

export default DateTimePage;
