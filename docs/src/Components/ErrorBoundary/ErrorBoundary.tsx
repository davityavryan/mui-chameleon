import React from 'react';

import { ErrorBoundaryFallback } from 'Components';

interface IProps {
    FallbackComponent?: React.ElementType;
    children?: JSX.Element | JSX.Element[];
}

interface IState {
    error?: Error;
}

// TODO: Sentry
class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            error: undefined,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const { error } = this.state;
        const { children = null, FallbackComponent } = this.props;

        if (error) {
            if (FallbackComponent === undefined) {
                return <ErrorBoundaryFallback error={error} />;
            }

            return <FallbackComponent error={error} />;
        }

        return children;
    }
}

export default ErrorBoundary;
