import React, { Fragment } from 'react';

import { Box, Typography } from '@mui/material';

interface Props {
    message?: string;
    error?: Error;
    info?: React.ErrorInfo;
}

function ErrorBoundaryFallback({ message, error, info }: Props) {
    if (message === undefined) {
        message = 'Sorry, something went wrong. Please try again later.';
    }

    const preStyles = {
        whiteSpace: 'pre-wrap',
        color: 'red',
    };

    return (
        <Fragment>
            <Typography variant="h4" gutterBottom>
                Something went wrong
            </Typography>

            <Typography variant="body1" gutterBottom>
                {message}
            </Typography>

            {process.env.NODE_ENV !== 'production' && (
                <h4>
                    {error && (
                        <Box component="pre" sx={preStyles}>
                            {error.stack}
                        </Box>
                    )}
                    {info && (
                        <Box component="pre" sx={preStyles}>
                            {info.componentStack}
                        </Box>
                    )}
                </h4>
            )}
        </Fragment>
    );
}

export default ErrorBoundaryFallback;
