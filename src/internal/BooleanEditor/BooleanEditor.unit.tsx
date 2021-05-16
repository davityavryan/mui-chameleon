import React from 'react';

import { cleanup, fireEvent, render } from '@testing-library/react';

import BooleanEditor from './BooleanEditor';

afterEach(cleanup);

const themeKey = 'parents-parent.parent.child';

const Icon0 = () => <span data-testid="icon0">icon-left</span>;
const Icon1 = () => <span data-testid="icon1">icon-right</span>;

const options = ['left', 'right'];
const icons = [Icon0, Icon1];

test('BooleanEditor should have correct label', async () => {
    const onChange = jest.fn();

    const { findByTestId, queryByTestId } = render(
        <BooleanEditor options={options} icons={icons} value={options[0]} themeKey={themeKey} onChange={onChange} />
    );

    expect(onChange).not.toHaveBeenCalled();

    expect(queryByTestId('icon0')).not.toBeNull();

    expect((await findByTestId('boolean-editor-label')).textContent).toEqual('Child');
});

test('BooleanEditor should change value on icon click', async () => {
    const onChange = jest.fn();

    const { findByTestId } = render(
        <BooleanEditor options={options} icons={icons} value={options[1]} themeKey={themeKey} onChange={onChange} />
    );

    const toggleElement = await findByTestId('boolean-editor-toggle');

    fireEvent.click(toggleElement);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(options[0]);
});
