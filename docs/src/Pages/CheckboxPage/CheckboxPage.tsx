import React, { Fragment } from 'react';

import { Frame } from 'Components';

import { BasicCheckboxes, CheckboxesGroup, CheckboxLabels, CheckboxLabelPlacement } from './Components';

function CheckboxPage() {
    return (
        <Fragment>
            <Frame title="Basic checkboxes">
                <BasicCheckboxes />
            </Frame>

            <Frame title="Checkbox with FormControlLabel">
                <CheckboxLabels />
            </Frame>

            <Frame title="Checkboxes with FormGroup">
                <CheckboxesGroup />
            </Frame>

            <Frame title="Label placement">
                <CheckboxLabelPlacement />
            </Frame>
        </Fragment>
    );
}

export default CheckboxPage;
