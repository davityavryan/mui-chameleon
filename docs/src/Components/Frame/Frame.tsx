import React, { memo, Suspense } from 'react';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Theme, Spinner } from 'Components';

interface IProps {
    title?: string;
    align?: 'flex-start' | 'center' | 'flex-end';
    children: JSX.Element | JSX.Element[];
}

function Frame({ title, align = 'center', children }: IProps) {
    return (
        <Box mb={3}>
            {title && (
                <Theme>
                    <Typography variant="h5" paragraph>
                        {title}
                    </Typography>
                </Theme>
            )}

            <Paper>
                <Box py={1} px={2} bgcolor="action.hover" borderRadius="shape.borderRadius">
                    <Box display="inline-block" bgcolor="error.main" borderRadius="50%" p={0.5} mr={0.5} />
                    <Box display="inline-block" bgcolor="warning.main" borderRadius="50%" p={0.5} mr={0.5} />
                    <Box display="inline-block" bgcolor="success.main" borderRadius="50%" p={0.5} mr={0.5} />
                </Box>

                <Box display="flex" flexDirection="column" alignItems={align} p={3}>
                    <Suspense fallback={<Spinner />}>{children}</Suspense>
                </Box>
            </Paper>
        </Box>
    );
}

export default memo(Frame);
