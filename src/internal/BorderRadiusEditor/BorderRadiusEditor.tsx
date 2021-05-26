import React, { memo, useCallback } from 'react';

import { TUnit, TUnitRadius, TValue } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

import { getUnit, toUnitless } from '../../utils';

const unitSet: TUnitRadius[] = ['px', 'rem', 'em', '%'];

function BorderRadiusEditor({ value, defaultValue, onChange, unit = 'px', ...props }: TFieldEditorProps) {
    const newValue = value ? toUnitless(value) : value;
    //FIXME: Remove newUnit logic after getUnit regex fix
    const newUnit = (newValue ? getUnit(value) || unit : unit) as TUnit;

    const handleFormatter = useCallback(
        (formatterValue: TValue) => {
            const formatterUnit = getUnit(formatterValue);
            if (Number(formatterValue)) {
                if (formatterUnit === '' || newUnit === 'px') {
                    return Number(formatterValue);
                }
                return `${Number(formatterValue)}${newUnit}`;
            }

            if (formatterUnit === 'px' && formatterValue) {
                return toUnitless(formatterValue);
            }

            return formatterValue;
        },
        [newUnit]
    );

    return (
        <FieldEditor
            {...props}
            type="number"
            defaultValue={defaultValue}
            step={newUnit === 'px' ? 1 : 0.1}
            unit={newUnit || unit}
            unitSet={unitSet}
            value={newValue}
            formatter={handleFormatter}
            onChange={onChange}
        />
    );
}

export default memo(BorderRadiusEditor);
