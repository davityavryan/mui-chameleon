import React from 'react';

import { describe, expect, test, vi, render } from 'test-utils';

import BorderRadiusEditor from './BorderRadiusEditor';

describe('BorderRadiusEditor', () => {
    const themeKey = 'parents-parent.parent.child';

    // TODO: re-visit: this just tests that there was no errors in rendering. it does not test if it rendered correctly
    test('should render correctly', async () => {
        const onChange = vi.fn();

        render(<BorderRadiusEditor value="4px" defaultValue="4px" themeKey={themeKey} onChange={onChange} />);

        expect(onChange).not.toHaveBeenCalled();
    });

    // TODO: re-visit: this just tests that there was no errors in rendering. it does not test if it rendered correctly
    test('should render correctly without value and defaultValue', async () => {
        const onChange = vi.fn();

        render(<BorderRadiusEditor value="" defaultValue="" themeKey={themeKey} onChange={onChange} />);

        expect(onChange).not.toHaveBeenCalled();
    });
});
