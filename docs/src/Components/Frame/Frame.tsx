import React from 'react';

import { Box, BoxProps, ThemeProvider, Typography, Theme as MuiTheme, SxProps, useTheme } from '@mui/material';

import { ErrorBoundary, DocsTheme } from 'Components';

interface Props extends BoxProps {
    title?: string;
    align?: 'flex-start' | 'center' | 'flex-end';
    children: JSX.Element | JSX.Element[];
}

function Frame({ title, align = 'center', children, ...boxProps }: Props) {
    const theme = useTheme();

    const frameStyles: SxProps<MuiTheme> = ({ shadows, shape }) => ({
        borderRadius: `${shape.borderRadius}px`,
        boxShadow: shadows[4],
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    });

    const topBarStyles: SxProps<MuiTheme> = ({ palette, spacing, shape }) => ({
        padding: spacing(1, 2),
        backgroundColor: palette.mode === 'light' ? palette.grey[100] : palette.grey[900],
        borderTopLeftRadius: `${shape.borderRadius}px`,
        borderTopRightRadius: `${shape.borderRadius}px`,

        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: palette.action.hover,
    });

    return (
        <Box mb={2}>
            {title && (
                <DocsTheme mode={theme.palette.mode}>
                    <Typography variant="h5" paragraph>
                        {title}
                    </Typography>
                </DocsTheme>
            )}

            <DocsTheme mode={theme.palette.mode}>
                <Box sx={frameStyles}>
                    <Box sx={topBarStyles}>
                        <Box display="inline-block" bgcolor="error.main" borderRadius="50%" p={0.5} mr={0.5} />
                        <Box display="inline-block" bgcolor="warning.main" borderRadius="50%" p={0.5} mr={0.5} />
                        <Box display="inline-block" bgcolor="success.main" borderRadius="50%" p={0.5} mr={0.5} />
                    </Box>

                    <Box
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        alignItems={align}
                        p={3}
                        {...boxProps}
                    >
                        <ErrorBoundary>
                            <ThemeProvider theme={theme}>{children}</ThemeProvider>
                        </ErrorBoundary>
                    </Box>
                </Box>
            </DocsTheme>
        </Box>
    );
}

export default Frame;
