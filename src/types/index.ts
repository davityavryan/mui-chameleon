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
    | 'soon' // FIXME: remove?
    | 'skip'; // FIXME: remove?

export type TUnit = 'px' | 'em' | 'rem' | 'ms' | 's'; // FIXME: get from Material
