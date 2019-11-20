import React from 'react';

import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded';
import BrightnessHighRounded from '@material-ui/icons/BrightnessHighRounded';
import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';

import BooleanEditor from '../internal/BooleanEditor/BooleanEditor';
import ColorPicker from '../internal/ColorPicker/ColorPicker';
import NumberEditor from '../internal/NumberEditor/NumberEditor';

const themeMap = {
    shape: {
        borderRadius: {
            type: 'number',
            step: 0.1,
            min: 0,
            unit: 'px',
        },
    },
    breakpoints: { type: 'soon' },
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
            hover: { type: 'color' },
            hoverOpacity: {
                type: 'number',
                step: 0.01,
                min: 0,
                max: 1,
            },
            selected: { type: 'color' },
            disabled: { type: 'color' },
            disabledBackground: { type: 'color' },
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
    shadows: { type: 'soon' },
    spacing: { type: 'skip' },
    transitions: { type: 'soon' },
    typography: { type: 'soon' },
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
        <NumberEditor
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
