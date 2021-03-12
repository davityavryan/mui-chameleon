import React, { Fragment, memo } from 'react';

import Typography from '@material-ui/core/Typography';

interface IProps {
    message?: string;
    error?: Error;
    info?: React.ErrorInfo;
}

function ErrorBoundaryFallback({ message, error, info }: IProps) {
    if (message === undefined) {
        message = 'Sorry, something went wrong. Please try again later.';
    }

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
                    {error && <pre color="red">{error.stack}</pre>}
                    {info && <pre color="red">{info.componentStack}</pre>}
                </h4>
            )}
        </Fragment>
    );
}

export default memo(ErrorBoundaryFallback);
