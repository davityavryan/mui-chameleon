import React from 'react';

import { mount } from '@cypress/react';

import '../../../cypress'; // Add custom commands

import BooleanEditor from './BooleanEditor';

describe('BooleanEditor should', () => {
    const themeKey = 'parents-parent.parent.child';

    const Icon0 = () => <span id="icon0">icon-left</span>;
    const Icon1 = () => <span id="icon1">icon-right</span>;

    const options = ['left', 'right'];
    const icons = [Icon0, Icon1];

    beforeEach(() => {
        const onChange = cy.spy().as('onChange');

        mount(
            <BooleanEditor options={options} icons={icons} value={options[0]} themeKey={themeKey} onChange={onChange} />
        );
    });

    it('have correct label', () => {
        cy.getByTestId('boolean-editor-label').should('exist').should('have.text', 'Child');
    });

    it('change value on icon click', () => {
        cy.getByTestId('boolean-editor-toggle').should('exist').click();

        cy.get('@onChange').should('have.been.calledOnce').and('have.been.calledWithExactly', options[1]);
    });
});
