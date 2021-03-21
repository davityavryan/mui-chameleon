import React, { memo } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { ErrorBoundary, Theme } from 'Components';

import useStyles from './Frame.style';

interface IProps {
    title?: string;
    align?: 'flex-start' | 'center' | 'flex-end';
    children: JSX.Element | JSX.Element[];
}

function Frame({ title, align = 'center', children }: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {title && (
                <Theme>
                    <Typography variant="h5" paragraph>
                        {title}
                    </Typography>
                </Theme>
            )}

            <div className={classes.frame}>
                <div className={classes.topBar}>
                    <Box display="inline-block" bgcolor="error.main" borderRadius="50%" p={0.5} mr={0.5} />
                    <Box display="inline-block" bgcolor="warning.main" borderRadius="50%" p={0.5} mr={0.5} />
                    <Box display="inline-block" bgcolor="success.main" borderRadius="50%" p={0.5} mr={0.5} />
                </div>

                <Box display="flex" flexDirection="column" alignItems={align} p={3}>
                    <ErrorBoundary>{children}</ErrorBoundary>
                </Box>
            </div>
        </div>
    );
}

export default memo(Frame);
