export type TThemeItemType =
    | 'text'
    | 'number'
    | 'boolean'
    | 'borderRadius'
    | 'color'
    | 'shadow'
    | 'easing'
    | 'fontSize'
    | 'fontFamily'
    | 'fontWeight'
    | 'lineHeight'
    | 'letterSpacing'
    | 'skip'; // FIXME: remove?

export type TUnit = TUnitDuration | TUnitSize | TUnitRadius;
export type TUnitSize = 'px' | 'em' | 'rem';
export type TUnitDuration = 'ms' | 's';
export type TUnitRadius = TUnitSize | '%';

export type TValue = any;
