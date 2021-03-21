import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { SortSelectTable, Tables } from './Components';

function TablesPage() {
    return (
        <Fragment>
            <Frame title="Table">
                <Tables />
            </Frame>

            <Frame title="Sorting & selecting">
                <SortSelectTable />
            </Frame>
        </Fragment>
    );
}

export default TablesPage;
