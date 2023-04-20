import React from 'react';

import { Box, LinearProgress, LinearProgressProps, Typography, Stack } from '@mui/material';

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

function ProgressLinear() {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(null);

    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Stack sx={{ width: '100%' }} spacing={2} direction="column">
            <LinearProgress />
            <LinearProgress color="secondary" />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgressWithLabel value={progress} />
        </Stack>
    );
}

export default ProgressLinear;
