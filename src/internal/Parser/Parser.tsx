import React from 'react';

import delve from 'dlv';

import { createTheme } from '@mui/material/styles';

import { themeMap, typesMap } from '../../utils';
import { themeKeyLabel } from '../../utils/themeKeyLabel';

import { StyledListSubHeader, StyledList, StyledLi, StyledUl, StyledListItem } from './Parser.style';

// TODO: separate theme for this file? :/
const defaultTheme = createTheme();

interface Props {
    item: unknown;
    itemKey: string;
    defaultValue: Record<string, unknown>;
    onChange: <V>(themeKey: string) => (newValue: V) => void;
    isTopLevel?: boolean;
}

function Parser({ item, itemKey, defaultValue, onChange, isTopLevel = false }: Props) {
    const mapItem = delve(themeMap, itemKey);

    if (typeof item === 'function' || (mapItem && mapItem.type === 'skip')) {
        return null;
    }

    if (typeof item === 'object') {
        return (
            <StyledList subheader={<li />}>
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
                        <StyledLi key={themeKey}>
                            <StyledUl>
                                <StyledListSubHeader>{themeKeyLabel(themeKey)}</StyledListSubHeader>

                                <Parser
                                    key={themeKey}
                                    item={nestedItem}
                                    itemKey={themeKey}
                                    defaultValue={delve(defaultTheme, themeKey)}
                                    onChange={onChange}
                                />
                            </StyledUl>
                        </StyledLi>
                    );
                })}
            </StyledList>
        );
    }

    const { type, ...props } = mapItem || { type: 'text' };

    const Component = typesMap[type];

    return (
        <StyledListItem isTopLevel={isTopLevel}>
            <Component
                {...props}
                value={item}
                themeKey={itemKey}
                onChange={onChange(itemKey)}
                defaultValue={defaultValue}
            />
        </StyledListItem>
    );
}

export default Parser;
