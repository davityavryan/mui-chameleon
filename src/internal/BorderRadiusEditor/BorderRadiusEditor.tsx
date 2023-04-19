import React from 'react';

import { getUnit, toUnitless } from '@mui/material/styles/cssUtils';

import { Unit } from '../../types';

import FieldEditor, { FieldEditorProps } from '../FieldEditor/FieldEditor';

const unitSet: Unit[] = ['px', 'rem', 'em', '%'];

function BorderRadiusEditor({ value, defaultValue, onChange, unit = 'px', ...props }: FieldEditorProps) {
    const newValue = value ?? defaultValue;
    const unitlessValue = newValue !== '' ? toUnitless(newValue) : newValue;
    const newUnit = (getUnit(newValue) || unit) as Unit;

    return (
        <FieldEditor
            {...props}
            type="number"
            step={newUnit === 'px' ? 1 : 0.1}
            unit={newUnit}
            unitSet={unitSet}
            value={unitlessValue}
            formatter={(newValue) => (newValue === '' ? defaultValue : `${Number(newValue)}${newUnit}`)}
            onChange={onChange}
        />
    );
}

export default BorderRadiusEditor;
