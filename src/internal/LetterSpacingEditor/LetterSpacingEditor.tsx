import React, { useCallback } from 'react';

import { getUnit, toUnitless } from '@mui/material/styles/cssUtils';

import { Unit, UnitSize, Value } from '../../types';
import FieldEditor, { FieldEditorProps } from '../FieldEditor/FieldEditor';

const unitSet: UnitSize[] = ['px', 'rem', 'em'];

function LetterSpacingEditor({ value, defaultValue, onChange, unit = 'em', ...props }: FieldEditorProps) {
    const newValue = toUnitless(value) || value;
    //FIXME: Remove newUnit logic after getUnit regex fix
    const newUnit = (newValue ? getUnit(value) || unit : unit) as Unit;

    const handleFormatter = useCallback(
        (formatterValue: Value) => {
            if (formatterValue === '') {
                return formatterValue;
            }

            if (Number(formatterValue)) {
                return `${Number(formatterValue)}${newUnit}`;
            }

            return formatterValue;
        },
        [newUnit]
    );

    return (
        <FieldEditor
            {...props}
            value={newValue}
            defaultValue={defaultValue}
            step={newUnit === 'px' ? 1 : 0.1}
            unit={newUnit}
            unitSet={unitSet}
            formatter={handleFormatter}
            onChange={onChange}
        />
    );
}

export default LetterSpacingEditor;
