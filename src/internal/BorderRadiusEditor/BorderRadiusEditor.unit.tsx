import React from 'react';

import { cleanup, render } from '@testing-library/react';

import BorderRadiusEditor from './BorderRadiusEditor';

const themeKey = 'parents-parent.parent.child';

jest.mock('../FieldEditor/FieldEditor', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />;
        },
    };
});

afterEach(cleanup);

test('BorderRadiusEditor should render correctly', async () => {
    const onChange = jest.fn();

    render(<BorderRadiusEditor value="4px" defaultValue="4px" themeKey={themeKey} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
});

test('BorderRadiusEditor should render correctly without value and defaultValue', async () => {
    const onChange = jest.fn();

    render(<BorderRadiusEditor value="" defaultValue="" themeKey={themeKey} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
});
