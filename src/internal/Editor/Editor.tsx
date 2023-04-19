import React, { Fragment } from 'react';

import delve from 'dlv';

import { Theme, Accordion } from '@mui/material';

import { Section, Parser } from '..';

import { themeMap, ThemeMapItem } from '../../utils';

interface Props {
    theme: Theme;
    defaultTheme: Theme;
    onChange: <V>(themeKey: string) => (newValue: V) => void;
}

function Editor({ theme, defaultTheme, onChange }: Props) {
    return (
        <Fragment>
            {Object.entries(theme).map(([key, themeItem]) => {
                const themeKey = key as keyof Theme;

                // Shutting Error due to MUI DocsTheme and ThemeOptions difference
                if (themeKey === 'unstable_sx') {
                    return null;
                }

                const mapItem = themeMap[themeKey];

                const mapItemType = (mapItem as ThemeMapItem)?.type;

                if (typeof themeItem === 'function' || mapItemType === 'skip') {
                    return null;
                }

                if (typeof themeItem === 'object') {
                    return (
                        <Section key={themeKey} title={themeKey}>
                            <Parser
                                item={themeItem}
                                itemKey={themeKey}
                                defaultValue={delve(defaultTheme, themeKey)}
                                onChange={onChange}
                            />
                        </Section>
                    );
                }

                return (
                    <Accordion key={themeKey}>
                        <Parser
                            item={themeItem}
                            itemKey={themeKey}
                            defaultValue={delve(defaultTheme, themeKey)}
                            onChange={onChange}
                            isTopLevel
                        />
                    </Accordion>
                );
            })}
        </Fragment>
    );
}

export default Editor;
