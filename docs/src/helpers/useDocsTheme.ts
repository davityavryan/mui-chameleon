import { useMemo } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme } from '@material-ui/core/styles';

function useDocsTheme() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode]
    );
}

export default useDocsTheme;
