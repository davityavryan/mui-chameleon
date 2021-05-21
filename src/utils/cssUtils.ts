// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
import { TUnit, TValue } from '../types';

const notNumberUnits: TUnit[] = ['normal'];

export function makeConvertValueFromUnitToUnit(baseFontSize: number) {
    return (value: TValue, fromUnit: TUnit, toUnit: TUnit) => {
        // From number units to NOT number unit
        if (notNumberUnits.includes(toUnit)) {
            return toUnit;
        }

        // From number  NOT number unit to number unit
        if (notNumberUnits.includes(fromUnit)) {
            value = baseFontSize;
        }

        if (value === '') {
            return value;
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

        return parseFloat(outputLength.toFixed(5)) + toUnit;
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
    if (notNumberUnits.includes(value)) {
        return value;
    }
    return parseFloat(value);
}
