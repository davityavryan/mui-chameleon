export type TThemeItemType =
    | 'text'
    | 'number'
    | 'boolean'
    | 'color'
    | 'shadow'
    | 'easing'
    | 'fontSize'
    | 'fontFamily'
    | 'fontWeight'
    | 'lineHeight'
    | 'letterSpacing'
    | 'skip'; // FIXME: remove?

export type TUnit = TUnitDuration | TUnitSize | TUnitLetterSpacing;
export type TUnitSize = 'px' | 'em' | 'rem';
export type TUnitDuration = 'ms' | 's';
export type TUnitLetterSpacing = TUnitSize | 'normal';

export type TValue = any;
