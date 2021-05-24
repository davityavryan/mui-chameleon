import React, { memo } from 'react';

import { TUnit, TUnitSize } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

import { getUnit, toUnitless } from '../../utils';

const unitSet: TUnitSize[] = ['px', 'rem', 'em'];

function LetterSpacingEditor({ value, defaultValue, onChange, unit = 'em', ...props }: TFieldEditorProps) {
    const newValue = value || defaultValue;
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

export default memo(LetterSpacingEditor);
