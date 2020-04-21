import React from 'react';

import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded';
import BrightnessHighRounded from '@material-ui/icons/BrightnessHighRounded';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';

import BooleanEditor from '../internal/BooleanEditor/BooleanEditor';
import ColorPicker from '../internal/ColorPicker/ColorPicker';
import FieldEditor from '../internal/FieldEditor/FieldEditor';

const themeMap = {
    shape: {
        borderRadius: {
            type: 'number',
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

const typesMap = {
    soon: () => null,
    skip: () => null,
    boolean: ({ value, options, onChange, ...props }) => (
        <BooleanEditor
            {...props}
            options={options}
            value={value}
            onChange={onChange}
        />
    ),
    color: ({ value, onChange, ...props }) => (
        <ColorPicker
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    number: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            type="number"
            formatter={(newValue) => Number(newValue)}
            value={value}
            onChange={onChange}
        />
    ),
    easing: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    fontFamily: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    fontWeight: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    fontSize: ({ value, onChange, unit = 'px', ...props }) => {
        const matches = typeof value === 'string' && value.match(/^([\d.]*)(px|rem|em)$/);
        const newUnit = matches ? matches[2] : unit;
        const newValue = matches ? Number(matches[1]) : value;

        return (
            <FieldEditor
                {...props}
                type="number"
                step={newUnit === 'px' ? 1: 0.1}
                min={0}
                unit={newUnit}
                value={newValue}
                formatter={(newValue) => `${Number(newValue)}${newUnit}`}
                onChange={onChange}
            />
        );
    },
    lineHeight: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    letterSpacing: ({ value, onChange, unit = 'px', ...props }) => {
        const matches = typeof value === 'string' && value.match(/^([\d.]*)(px|rem|em)$/);
        const newUnit = matches ? matches[2] : unit;
        const newValue = matches ? Number(matches[1]) : value;

        return (
            <FieldEditor
                {...props}
                type="number"
                step={newUnit === 'px' ? 1: 0.1}
                unit={newUnit}
                value={newValue}
                formatter={(newValue) => `${Number(newValue)}${newUnit}`}
                onChange={onChange}
            />
        );
    },
    textTransform: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    text: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
    shadow: ({ value, onChange, ...props }) => (
        <FieldEditor
            {...props}
            value={value}
            onChange={onChange}
        />
    ),
};

export {
    themeMap,
    typesMap,
};
