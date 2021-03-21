import React, { memo } from 'react';

import { TUnit } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

function FontSizeEditor({ value, onChange, unit = 'px', ...props }: TFieldEditorProps) {
    const matches = typeof value === 'string' && value.match(/^([\d.]*)(px|rem|em)$/);
    const newUnit = matches ? matches[2] : unit;
    const newValue = matches ? Number(matches[1]) : value;

    return (
        <FieldEditor
            {...props}
            type="number"
            step={newUnit === 'px' ? 1 : 0.1}
            min={0}
            unit={newUnit as TUnit}
            value={newValue}
            formatter={(newValue) => (newUnit === 'px' ? Number(newValue) : `${Number(newValue)}${newUnit}`)}
            onChange={onChange}
        />
    );
}

export default memo(FontSizeEditor);
