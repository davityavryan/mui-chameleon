import React, { useCallback } from 'react';

import { Typography, Breadcrumbs, Link, Chip, Stack, emphasize, styled } from '@mui/material';

import { Grain, Home, ExpandMore, NavigateNext, Whatshot } from '@mui/icons-material';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function SimpleBreadcrumbs() {
    const handleClick = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
    }, []);

    return (
        <Stack spacing={2} direction="column">
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    MUI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    MUI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator="-" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    MUI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    MUI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb">
                <Link display="flex" color="inherit" href="/" onClick={handleClick}>
                    <Home sx={{ mr: 0.5, width: 20, height: 20 }} />
                    MUI
                </Link>
                <Link display="flex" color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    <Whatshot sx={{ mr: 0.5, width: 20, height: 20 }} />
                    Core
                </Link>
                <Typography display="flex" color="textPrimary">
                    <Grain sx={{ mr: 0.5, width: 20, height: 20 }} />
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                <Link color="inherit" href="#" onClick={handleClick}>
                    Home
                </Link>
                <Link color="inherit" href="#" onClick={handleClick}>
                    Catalog
                </Link>
                <Link color="inherit" href="#" onClick={handleClick}>
                    Accessories
                </Link>
                <Link color="inherit" href="#" onClick={handleClick}>
                    New Collection
                </Link>
                <Typography color="textPrimary">Belts</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Home"
                    icon={<Home fontSize="small" />}
                    onClick={handleClick}
                />
                <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
                <StyledBreadcrumb
                    label="Accessories"
                    deleteIcon={<ExpandMore />}
                    onClick={handleClick}
                    onDelete={handleClick}
                />
            </Breadcrumbs>
        </Stack>
    );
}

export default SimpleBreadcrumbs;
