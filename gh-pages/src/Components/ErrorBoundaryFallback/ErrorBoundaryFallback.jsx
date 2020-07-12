import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function ErrorBoundaryFallback({ message, error, info }) {
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

ErrorBoundaryFallback.propTypes = {
    message: PropTypes.string,
    error: PropTypes.object,
    info: PropTypes.object,
};

ErrorBoundaryFallback.defaultProps = {
    message: 'Sorry, something went wrong. Please try again later.',
    error: null,
    info: null,
};

export default memo(ErrorBoundaryFallback);
