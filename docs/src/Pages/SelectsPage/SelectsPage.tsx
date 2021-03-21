import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { SimpleSelect, NativeSelects, MultipleSelect } from './Components';

function SelectsPage() {
    return (
        <Fragment>
            <Frame title="Simple Select">
                <SimpleSelect />
            </Frame>

            <Frame title="Native Select">
                <NativeSelects />
            </Frame>

            <Frame title="Multiple Select">
                <MultipleSelect />
            </Frame>
        </Fragment>
    );
}

export default SelectsPage;
