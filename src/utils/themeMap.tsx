import React from 'react';

import { ThemeOptions } from '@material-ui/core/styles';

import {
    Brightness4Rounded,
    BrightnessHighRounded,
    FormatTextdirectionLToR,
    FormatTextdirectionRToL,
} from '@material-ui/icons';

import {
    BooleanEditor,
    ColorEditor,
    FieldEditor,
    FontSizeEditor,
    FontWeightEditor,
    LetterSpacingEditor,
    NumberEditor,
    BorderRadiusEditor,
} from '../internal';

import { TThemeItemType, TUnit, TValue } from '../types';

export type TThemeMapItem = {
    type: TThemeItemType;
    min?: number;
    max?: number;
    unit?: TUnit;
    step?: number;
    options?: string[];
    icons?: React.ElementType[];
};

// TODO: ThemeOptions or Theme?
export type TThemeMap = {
    [key in keyof ThemeOptions]:
        | TThemeMapItem
        | TThemeMapItem[]
        | {
              [subKey in keyof ThemeOptions[key]]:
                  | TThemeMapItem
                  | TThemeMapItem[]
                  | {
                        [subSubKey: string]: TThemeMapItem;
                    };
          };
};

export const themeMap: TThemeMap = {
    shape: {
        borderRadius: {
            type: 'borderRadius',
            min: 0,
            unit: 'px',
        },
    },
    breakpoints: {
        keys: {
            type: 'skip',
        },
        values: {
            // TODO: construct this
            lg: {
                type: 'number',
                min: 0,
                step: 1,
            },
            md: {
                type: 'number',
                min: 0,
                step: 1,
            },
            sm: {
                type: 'number',
                min: 0,
                step: 1,
            },
            xl: {
                type: 'number',
                min: 0,
                step: 1,
            },
            xs: {
                type: 'number',
                min: 0,
                step: 1,
            },
        },
    },
    direction: {
        type: 'boolean',
        options: ['ltr', 'rtl'],
        icons: [FormatTextdirectionLToR, FormatTextdirectionRToL],
    },
    mixins: { type: 'skip' },
    overrides: { type: 'skip' },
    palette: {
        type: {
            type: 'boolean',
            options: ['light', 'dark'],
            icons: [Brightness4Rounded, BrightnessHighRounded],
        },
        common: {
            black: { type: 'color' },
            white: { type: 'color' },
        },
        primary: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        secondary: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        error: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        warning: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        info: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        success: {
            contrastText: { type: 'color' },
            dark: { type: 'color' },
            light: { type: 'color' },
            main: { type: 'color' },
        },
        grey: {
            50: { type: 'color' },
            100: { type: 'color' },
            200: { type: 'color' },
            300: { type: 'color' },
            400: { type: 'color' },
            500: { type: 'color' },
            600: { type: 'color' },
            700: { type: 'color' },
            800: { type: 'color' },
            900: { type: 'color' },
            A100: { type: 'color' },
            A200: { type: 'color' },
            A400: { type: 'color' },
            A700: { type: 'color' },
        },
        text: {
            primary: { type: 'color' },
            secondary: { type: 'color' },
            disabled: { type: 'color' },
            hint: { type: 'color' },
            icon: { type: 'color' },
        },
        divider: { type: 'color' },
        background: {
            paper: { type: 'color' },
            default: { type: 'color' },
        },
        action: {
            active: { type: 'color' },
            activatedOpacity: {
                type: 'number',
                step: 0.1,
                min: 0,
                max: 1,
            },
            hover: { type: 'color' },
            hoverOpacity: {
                type: 'number',
                step: 0.1,
                min: 0,
                max: 1,
            },
            selected: { type: 'color' },
            selectedOpacity: {
                type: 'number',
                step: 0.1,
                min: 0,
                max: 1,
            },
            disabled: { type: 'color' },
            disabledOpacity: {
                type: 'number',
                step: 0.1,
                min: 0,
                max: 1,
            },
            disabledBackground: { type: 'color' },
            focus: { type: 'color' },
            focusOpacity: {
                type: 'number',
                step: 0.1,
                min: 0,
                max: 1,
            },
        },
        contrastThreshold: {
            type: 'number',
            step: 0.1,
            min: 1,
            max: 3,
        },
        tonalOffset: {
            type: 'number',
            step: 0.1,
        },
    },
    props: { type: 'skip' },
    shadows: [
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
        { type: 'shadow' },
    ],
    spacing: { type: 'skip' },
    transitions: {
        duration: {
            shortest: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            shorter: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            short: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            standard: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            complex: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            enteringScreen: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
            leavingScreen: {
                type: 'number',
                min: 0,
                unit: 'ms',
            },
        },
        easing: {
            easeInOut: { type: 'easing' },
            easeOut: { type: 'easing' },
            easeIn: { type: 'easing' },
            sharp: { type: 'easing' },
        },
    },
    typography: {
        htmlFontSize: { type: 'fontSize' },
        fontFamily: { type: 'fontFamily' },
        fontSize: { type: 'fontSize' },
        fontWeightLight: { type: 'fontWeight' },
        fontWeightRegular: { type: 'fontWeight' },
        fontWeightMedium: { type: 'fontWeight' },
        fontWeightBold: { type: 'fontWeight' },
        h1: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        h2: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        h3: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        h4: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        h5: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        h6: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        subtitle1: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        subtitle2: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        body1: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        body2: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        button: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
            textTransform: { type: 'textTransform' },
        },
        caption: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
        },
        overline: {
            fontFamily: { type: 'fontFamily' },
            fontWeight: { type: 'fontWeight' },
            fontSize: { type: 'fontSize' },
            lineHeight: { type: 'lineHeight' },
            letterSpacing: { type: 'letterSpacing' },
            textTransform: { type: 'textTransform' },
        },
    },
    zIndex: {
        mobileStepper: {
            type: 'number',
            step: 1,
            min: 0,
        },
        speedDial: {
            type: 'number',
            step: 1,
            min: 0,
        },
        appBar: {
            type: 'number',
            step: 1,
            min: 0,
        },
        drawer: {
            type: 'number',
            step: 1,
            min: 0,
        },
        modal: {
            type: 'number',
            step: 1,
            min: 0,
        },
        snackbar: {
            type: 'number',
            step: 1,
            min: 0,
        },
        tooltip: {
            type: 'number',
            step: 1,
            min: 0,
        },
    },
};

type TProps<V = TValue> = TThemeMapItem & {
    value: V;
    defaultValue: V;
    themeKey: string;
    onChange: (newValue: V) => void;
};

type TTypesMap = {
    [key: string]: React.FunctionComponent<TProps>;
};

export const typesMap: TTypesMap = {
    skip: () => null,
    boolean: BooleanEditor,
    borderRadius: BorderRadiusEditor,
    color: ColorEditor,
    number: NumberEditor,
    easing: FieldEditor,
    fontFamily: FieldEditor,
    fontWeight: FontWeightEditor,
    fontSize: FontSizeEditor,
    lineHeight: FieldEditor,
    letterSpacing: LetterSpacingEditor,
    textTransform: FieldEditor,
    text: FieldEditor,
    shadow: FieldEditor,
};
