import React, { memo } from 'react';

import { TUnit } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

import { getUnit, toUnitless } from '../../utils';

const unitSet: TUnit[] = ['px', 'rem', 'em', '%'];

function BorderRadiusEditor({ value, defaultValue, onChange, unit = 'px', ...props }: TFieldEditorProps) {
    const newValue = value ?? defaultValue;
    const newUnit = (getUnit(newValue) || unit) as TUnit;

    return (
        <FieldEditor
            {...props}
            type="number"
            step={newUnit === 'px' ? 1 : 0.1}
            unit={newUnit}
            unitSet={unitSet}
            value={toUnitless(newValue)}
            formatter={(newValue) => (newValue === '' ? defaultValue : `${Number(newValue)}${newUnit}`)}
            onChange={onChange}
        />
    );
}

export default memo(BorderRadiusEditor);
