import React, { memo, useCallback } from 'react';

import { TUnit, TUnitSize, TValue } from '../../types';

import FieldEditor, { TFieldEditorProps } from '../FieldEditor/FieldEditor';

import { getUnit, toUnitless } from '../../utils';

const unitSet: TUnitSize[] = ['px', 'rem', 'em'];

function LetterSpacingEditor({ value, defaultValue, onChange, unit = 'em', ...props }: TFieldEditorProps) {
    const newValue = toUnitless(value) || value;
    //FIXME: Remove newUnit logic after getUnit regex fix
    const newUnit = (newValue ? getUnit(value) || unit : unit) as TUnit;

    const handleFormatter = useCallback(
        (formatterValue: TValue) => {
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

export default memo(LetterSpacingEditor);
