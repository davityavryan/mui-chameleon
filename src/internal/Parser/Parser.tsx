import React from 'react';

import delve from 'dlv';

import { List, ListItem, ListSubheader } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { themeMap, typesMap, themeKeyLabel } from '../../utils';

import useStyles from './Parser.style';

// TODO: separate theme for this file? :/
const defaultTheme = createMuiTheme();

interface IProps {
    item: unknown;
    itemKey: string;
    defaultValue: Record<string, unknown>;
    onChange: (themeKey: string) => (newValue: unknown) => void;
    isTopLevel?: boolean;
}

function Parser({ item, itemKey, defaultValue, onChange, isTopLevel = false }: IProps) {
    const classes = useStyles({ isTopLevel });

    const mapItem = delve(themeMap, itemKey);

    if (typeof item === 'function' || (mapItem && mapItem.type === 'skip')) {
        return null;
    }

    if (typeof item === 'object') {
        return (
            <List className={classes.root} subheader={<li />}>
                {Object.entries(item).map(([nestedItemKey, nestedItem]) => {
                    const themeKey = `${itemKey}.${nestedItemKey}`;

                    if (typeof nestedItem !== 'object') {
                        return (
                            <Parser
                                key={themeKey}
                                item={nestedItem}
                                itemKey={themeKey}
                                defaultValue={delve(defaultTheme, themeKey)}
                                onChange={onChange}
                            />
                        );
                    }

                    return (
                        <li key={themeKey} className={classes.listSection}>
                            <ul className={classes.ul}>
                                <ListSubheader className={classes.listSubHeader}>
                                    {themeKeyLabel(themeKey)}
                                </ListSubheader>

                                <Parser
                                    key={themeKey}
                                    item={nestedItem}
                                    itemKey={themeKey}
                                    defaultValue={delve(defaultTheme, themeKey)}
                                    onChange={onChange}
                                />
                            </ul>
                        </li>
                    );
                })}
            </List>
        );
    }

    const { type, ...props } = mapItem || { type: 'text' };

    const Component = typesMap[type];

    return (
        <ListItem className={classes.listItem}>
            <Component
                {...props}
                value={item}
                themeKey={itemKey}
                onChange={onChange(itemKey)}
                defaultValue={defaultValue}
            />
        </ListItem>
    );
}

export default Parser;
