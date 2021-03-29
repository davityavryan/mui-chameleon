import { useMemo } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';

import type { Shadows } from '@material-ui/core/styles/shadows';

export function useDocsTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return useMemo(() => {
        const shadows = [
            'none',
            ...Array(24)
                .fill('')
                .map((_, i) => `0 0 ${Math.round(i * 0.75 + 10)}px rgb(0,0,0,${prefersDarkMode ? 0.24 : 0.12})`),
        ] as Shadows;

        return createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
                background: {
                    default: prefersDarkMode ? '#333' : '#eee',
                },
            },
            shadows,
        });
    }, [prefersDarkMode]);
}
