import React, { Fragment } from 'react';

import { Box, CircularProgress, CircularProgressProps, Stack, Typography } from '@mui/material';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

function ProgressCircular() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Fragment>
            <Stack sx={{ my: 2 }} spacing={2} direction="row">
                <CircularProgress />
                <CircularProgress color="secondary" />
                <CircularProgress disableShrink />
            </Stack>

            <Stack sx={{ my: 2 }} spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
                <CircularProgressWithLabel value={progress} />
            </Stack>
        </Fragment>
    );
}

export default ProgressCircular;
