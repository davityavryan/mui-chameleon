import React, { memo, Suspense } from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Theme, Spinner } from 'Components';

function Frame({ title, align, children }) {
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

Frame.propTypes = {
    title: PropTypes.string,
    align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
    children: PropTypes.node.isRequired,
};

Frame.defaultProps = {
    align: 'center',
    title: '',
};

export default memo(Frame);
