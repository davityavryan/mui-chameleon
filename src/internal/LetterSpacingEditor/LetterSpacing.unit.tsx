import React from 'react';

import { cleanup, render } from '@testing-library/react';

import LetterSpacingEditor from './LetterSpacingEditor';

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

test('LetterSpacing should render correctly', async () => {
    const onChange = jest.fn();

    render(<LetterSpacingEditor value="12px" defaultValue="12px" themeKey={themeKey} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
});

test('LetterSpacing should render correctly without value and defaultValue', async () => {
    const onChange = jest.fn();

    render(<LetterSpacingEditor value="" defaultValue="" themeKey={themeKey} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
});
