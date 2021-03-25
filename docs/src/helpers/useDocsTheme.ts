import { useMemo } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, fade } from '@material-ui/core/styles';

import type { Shadows } from '@material-ui/core/styles/shadows';

const shadowKeyUmbraOpacity = 0.17;
const shadowKeyPenumbraOpacity = 0.12;
const shadowAmbientShadowOpacity = 0.1;

function createShadow(...px: number[]) {
    return [
        `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px ${fade('#bdbdbd', shadowKeyUmbraOpacity)}`,
        `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px ${fade('#bdbdbd', shadowKeyPenumbraOpacity)}`,
        `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px ${fade('#bdbdbd', shadowAmbientShadowOpacity)}`,
    ].join(',');
}

function useDocsTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    background: {
                        default: prefersDarkMode ? '#202020' : '#eee',
                    },
                },
                shadows: [
                    'none',
                    ...Array(24)
                        .fill('')
                        .map((_, i) => {
                            const m = i + 1;
                            const s = 10;

                            return createShadow(
                                0,
                                0,
                                Math.round(m * 0.75 + s),
                                0,
                                0,
                                0,
                                Math.round(m * 1.5 + s),
                                0,
                                0,
                                0,
                                m * 2 + s,
                                m
                            );
                        }),
                ] as Shadows,
            }),
        [prefersDarkMode]
    );
}

export default useDocsTheme;
