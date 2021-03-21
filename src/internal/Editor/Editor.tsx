import React, { Fragment, memo } from 'react';

import delve from 'dlv';

import { Theme, ExpansionPanel } from '@material-ui/core';

import { Section, Parser } from '..';

import { themeMap, TThemeMapItem } from '../../utils';

interface IProps {
    theme: Theme;
    defaultTheme: Theme;
    onChange: (themeKey: string) => (newValue: unknown) => void;
}

function Editor({ theme, defaultTheme, onChange }: IProps) {
    return (
        <Fragment>
            {Object.entries(theme).map(([key, themeItem]) => {
                const themeKey = key as keyof Theme;
                const mapItem = themeMap[themeKey];
                const mapItemType = (mapItem as TThemeMapItem).type;

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
                    <ExpansionPanel key={themeKey}>
                        <Parser
                            item={themeItem}
                            itemKey={themeKey}
                            defaultValue={delve(defaultTheme, themeKey)}
                            onChange={onChange}
                            isTopLevel
                        />
                    </ExpansionPanel>
                );
            })}
        </Fragment>
    );
}

export default memo(Editor);
