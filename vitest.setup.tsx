import React, { Suspense } from 'react';
import { afterEach, expect } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, RenderOptions } from '@testing-library/react';

import { createTheme, ThemeProvider } from '@mui/material';

expect.extend(matchers);

// https://vitest.dev/guide/migration.html#migrating-from-jest
// https://testing-library.com/docs/react-testing-library/api/#cleanup
afterEach(() => cleanup());

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
    const theme = createTheme();

    const rtl = render(ui, {
        wrapper: ({ children }) => (
            <Suspense fallback={null}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Suspense>
        ),
        ...options,
    });

    return {
        ...rtl,
        rerender: (ui: React.ReactElement, rerenderOptions?: RenderOptions) =>
            customRender(ui, {
                container: rtl.container,
                ...options,
                ...rerenderOptions,
            }),
    };
};

export * from '@testing-library/react';

export { customRender as render };
