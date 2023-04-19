import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { DateTimePickers, NativePickers } from './Components';

function DateTimePage() {
    return (
        <Fragment>
            <Frame title="@mui/x-date-pickers">
                <DateTimePickers />
            </Frame>

            <Frame title="Native pickers">
                <NativePickers />
            </Frame>
        </Fragment>
    );
}

export default DateTimePage;
