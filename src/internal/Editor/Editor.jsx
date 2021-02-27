import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import objectPath from 'object-path';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import Section from '../Section/Section';
import Parser from '../Parser/Parser';

import { themeMap } from '../../utils';

function Editor({ theme, defaultTheme, onChange }) {
    const entries = Object.entries(theme);

    entries.sort(([key1], [key2]) => (Number.isNaN(Number(key1)) ? key1.localeCompare(key2) : key1 - key2));

    return (
        <Fragment>
            {entries.map(([key, themeItem]) => {
                const themeKey = key;
                const mapItem = themeMap[themeKey];

                if (typeof themeItem === 'function' || (mapItem && mapItem.type === 'skip')) {
                    return null;
                }

                if (mapItem && mapItem.type === 'soon') {
                    return <Section key={themeKey} title={themeKey} secondaryTitle="Coming soon" />;
                }

                if (typeof themeItem === 'object') {
                    return (
                        <Section key={themeKey} title={themeKey}>
                            <Parser
                                item={themeItem}
                                itemKey={themeKey}
                                defaultValue={objectPath.get(defaultTheme, themeKey)}
                                onChange={onChange}
                            />
                        </Section>
                    );
                }

                return (
                    <ExpansionPanel key={themeKey}>
                        <Parser
                            item={themeItem}
                            itemKey={themeKey}
                            defaultValue={objectPath.get(defaultTheme, themeKey)}
                            onChange={onChange}
                            isTopLevel
                        />
                    </ExpansionPanel>
                );
            })}
        </Fragment>
    );
}

Editor.propTypes = {
    theme: PropTypes.object.isRequired,
    defaultTheme: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default memo(Editor);
