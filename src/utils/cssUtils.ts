// Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length
import { TValue } from '../types';

// Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"
export function getUnit(value: TValue) {
    return String(value).match(/[\d.\-+]*\s*(.*)/)[1] || '';
}

// Emulate the sass function "unitless"
export function toUnitless(value: TValue) {
    return parseFloat(value);
}
