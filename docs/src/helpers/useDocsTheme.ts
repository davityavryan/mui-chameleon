import { useMemo } from 'react';

import { createTheme, useMediaQuery, Shadows, PaletteMode } from '@mui/material';

type Props = {
    mode?: PaletteMode;
};

export function useDocsTheme({ mode }: Props) {
    const prefersDarkMode = true; //mode === 'dark'; // useMediaQuery('(prefers-color-scheme: dark)');

    return useMemo(() => {
        const shadows = [
            'none',
            ...Array(24)
                .fill('')
                .map((_, i) => `0 0 ${Math.round(i * 0.75 + 10)}px rgb(0,0,0,${prefersDarkMode ? 0.24 : 0.12})`),
        ] as Shadows;

        return createTheme({
            palette: {
                mode: prefersDarkMode ? 'dark' : 'light',
                background: {
                    default: prefersDarkMode ? '#333' : '#eee',
                },
            },
            shadows,
        });
    }, [prefersDarkMode]);
}
