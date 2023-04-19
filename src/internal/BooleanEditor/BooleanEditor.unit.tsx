import React from 'react';

import { describe, expect, test, vi, render, user } from 'test-utils';

import BooleanEditor from './BooleanEditor';

describe('BooleanEditor', () => {
    const themeKey = 'parents-parent.parent.child';

    const Icon0 = () => <span data-testid="icon0">icon-left</span>;
    const Icon1 = () => <span data-testid="icon1">icon-right</span>;

    const options = ['left', 'right'];
    const icons = [Icon0, Icon1];

    test('should have correct label', async () => {
        const onChange = vi.fn();

        const { findByTestId, queryByTestId } = render(
            <BooleanEditor options={options} icons={icons} value={options[0]} themeKey={themeKey} onChange={onChange} />
        );

        expect(onChange).not.toHaveBeenCalled();

        expect(queryByTestId('icon0')).not.toBeNull();

        expect((await findByTestId('boolean-editor-label')).textContent).toEqual('Child');
    });

    test('should change value on icon click', async () => {
        const onChange = vi.fn();

        const { findByTestId } = render(
            <BooleanEditor options={options} icons={icons} value={options[1]} themeKey={themeKey} onChange={onChange} />
        );

        const toggleElement = await findByTestId('boolean-editor-toggle');

        await user.click(toggleElement);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(options[0]);
    });
});
