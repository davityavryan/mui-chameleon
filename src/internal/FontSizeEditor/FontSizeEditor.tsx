import React from 'react';

import { Unit, UnitSize } from '../../types';

import FieldEditor, { FieldEditorProps } from '../FieldEditor/FieldEditor';

const unitSet: UnitSize[] = ['px', 'rem', 'em'];

function FontSizeEditor({ value, onChange, unit = 'px', ...props }: FieldEditorProps) {
    const matches = typeof value === 'string' && value.match(/^([\d.]*)(px|rem|em)$/);
    const newUnit = matches ? matches[2] : unit;
    const newValue = matches ? Number(matches[1]) : value;

    return (
        <FieldEditor
            {...props}
            type="number"
            step={newUnit === 'px' ? 1 : 0.1}
            min={0}
            unit={newUnit as Unit}
            unitSet={unitSet}
            value={newValue}
            formatter={(newValue) => (newUnit === 'px' ? Number(newValue) : `${Number(newValue)}${newUnit}`)}
            onChange={onChange}
        />
    );
}

export default FontSizeEditor;
