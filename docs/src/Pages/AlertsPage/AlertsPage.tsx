import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { AlertsDescription, AlertsFilled, AlertsOutlined, AlertsStandard, AlertsWithIcons } from './Components';

function AlertsPage() {
    return (
        <Fragment>
            <Frame title="Standard">
                <AlertsStandard />
            </Frame>

            <Frame title="Outlined">
                <AlertsOutlined />
            </Frame>

            <Frame title="Filled">
                <AlertsFilled />
            </Frame>

            <Frame title="Alerts with icons and action">
                <AlertsWithIcons />
            </Frame>

            <Frame title="With description">
                <AlertsDescription />
            </Frame>
        </Fragment>
    );
}

export default AlertsPage;
