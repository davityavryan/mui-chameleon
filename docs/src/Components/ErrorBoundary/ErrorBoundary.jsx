import React from 'react';
import PropTypes from 'prop-types';

import { ErrorBoundaryFallback } from 'Components';

// TODO: Sentry
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { error } = this.state;
        const { children, FallbackComponent } = this.props;

        if (error) {
            return <FallbackComponent error={error} />;
        }

        return children;
    }
}

ErrorBoundary.propTypes = {
    FallbackComponent: PropTypes.object,
};

ErrorBoundary.defaultProps = {
    FallbackComponent: ErrorBoundaryFallback,
};

export default ErrorBoundary;
