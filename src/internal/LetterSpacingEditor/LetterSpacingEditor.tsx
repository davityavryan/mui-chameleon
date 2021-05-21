import React, { memo } from 'react';

import { TUnit, TUnitLetterSpacing } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

import { getUnit, toUnitless } from '../../utils';

// TODO: Add "normal" as value?
const unitSet: TUnitLetterSpacing[] = ['px', 'rem', 'em', 'normal'];

function LetterSpacingEditor({ value, onChange, unit = 'px', ...props }: TFieldEditorProps) {
    const newUnit = (getUnit(value) || unit) as TUnit;
    const newValue = value === '' ? value : toUnitless(value);

    return (
        <FieldEditor
            {...props}
            type="string"
            step={newUnit === 'px' ? 1 : 0.1}
            unit={newUnit}
            unitSet={unitSet}
            value={newValue}
            formatter={(newValue) => `${Number(newValue)}${newUnit}`}
            onChange={onChange}
        />
    );
}

export default memo(LetterSpacingEditor);
