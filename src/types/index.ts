export type ThemeItemType =
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

export type Unit = UnitDuration | UnitSize | UnitRadius;
export type UnitSize = 'px' | 'em' | 'rem';
export type UnitDuration = 'ms' | 's';
export type UnitRadius = UnitSize | '%';

export type Value = any;
