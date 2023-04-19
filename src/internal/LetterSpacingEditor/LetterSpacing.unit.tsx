import React from 'react';

import { describe, expect, test, vi, render } from 'test-utils';

import LetterSpacingEditor from './LetterSpacingEditor';

describe('LetterSpacing', () => {
    const themeKey = 'parents-parent.parent.child';

    test('should render correctly', async () => {
        const onChange = vi.fn();

        render(<LetterSpacingEditor value="12px" defaultValue="12px" themeKey={themeKey} onChange={onChange} />);

        expect(onChange).not.toHaveBeenCalled();
    });

    test('should render correctly without value and defaultValue', async () => {
        const onChange = vi.fn();

        render(<LetterSpacingEditor value="" defaultValue="" themeKey={themeKey} onChange={onChange} />);

        expect(onChange).not.toHaveBeenCalled();
    });
});
