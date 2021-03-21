import React from 'react';

import { mount } from '@cypress/react';

import '../../../cypress'; // Add custom commands

import BooleanEditor from './BooleanEditor';

context('BooleanEditor', () => {
    describe('should', () => {
        it('have correct label', () => {
            const themeKey = 'parents-parent.parent.child';
            const onChange = cy.spy();

            const Icon0 = () => <span id="icon0">icon-left</span>;
            const Icon1 = () => <span id="icon1">icon-right</span>;

            mount(
                <BooleanEditor
                    options={['left', 'right']}
                    icons={[Icon0, Icon1]}
                    value={'left'}
                    themeKey={themeKey}
                    onChange={onChange}
                />
            );

            cy.getByTestId('boolean-editor-label').should('exist').should('have.text', 'Child');
        });

        it('change value on icon click', () => {
            const themeKey = 'parents-parent.parent.child';
            const onChange = cy.spy().as('onChange');

            const Icon0 = () => <span id="icon0">icon-left</span>;
            const Icon1 = () => <span id="icon1">icon-right</span>;

            const options = ['left', 'right'];
            const icons = [Icon0, Icon1];

            mount(
                <BooleanEditor
                    options={options}
                    icons={icons}
                    value={options[0]}
                    themeKey={themeKey}
                    onChange={onChange}
                />
            );

            cy.getByTestId('boolean-editor-toggle').should('exist').click();

            cy.get('@onChange').should('have.been.calledOnce').and('have.been.calledWithExactly', options[1]);
        });
    });
});
