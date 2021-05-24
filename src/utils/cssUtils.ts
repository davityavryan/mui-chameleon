// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
import { TUnit, TValue } from '../types';

export function makeConvertValueFromUnitToUnit(baseFontSize: number) {
    return (value: TValue, fromUnit: TUnit, toUnit: TUnit) => {
        if (value === '') {
            return value;
        }

        // TODO: Add comments after approval, add unit test for those cases
        if (toUnit === '%') {
            return `${value}%`;
        }

        if (fromUnit === '%') {
            return `${value}${toUnit}`;
        }

        // Optimize for cases where `from` and `to` units are accidentally the same.
        if (fromUnit === toUnit) {
            return `${value}${fromUnit}`;
        }

        // Convert input length to pixels.
        let pxLength = value;

        if (fromUnit !== 'px') {
            if (fromUnit === 'em') {
                pxLength = value * toUnitless(baseFontSize);
            } else if (fromUnit === 'rem') {
                pxLength = value * toUnitless(baseFontSize);
            }
        }

        // Convert length in pixels to the output unit
        let outputLength = pxLength;
        if (toUnit !== 'px') {
            if (toUnit === 'em') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else if (toUnit === 'rem') {
                outputLength = pxLength / toUnitless(baseFontSize);
            } else {
                return `${value}${fromUnit}`;
            }
        }

        return parseFloat(outputLength) + toUnit;
    };
}

// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
export function getUnit(value: TValue) {
    return String(value).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}

// Emulate the sass function "unitless"
export function toUnitless(value: TValue | number) {
    return parseFloat(value);
}
