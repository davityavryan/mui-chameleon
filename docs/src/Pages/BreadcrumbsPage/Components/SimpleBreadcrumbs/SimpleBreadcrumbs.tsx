import React, { useCallback } from 'react';

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { emphasize, withStyles, Theme } from '@material-ui/core/styles';

import GrainIcon from '@material-ui/icons/Grain';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import useStyles from './SimpleBreadcrumbs.style';

const StyledBreadcrumb = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function SimpleBreadcrumbs() {
    const classes = useStyles();

    const handleClick = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
        event.preventDefault();
    }, []);

    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator="-" aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick}>
                    Material-UI
                </Link>
                <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                    Core
                </Link>
                <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Material-UI
                </Link>
                <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    onClick={handleClick}
                    className={classes.link}
                >
                    <WhatshotIcon className={classes.icon} />
                    Core
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                    <GrainIcon className={classes.icon} />
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
                    icon={<HomeIcon fontSize="small" />}
                    onClick={handleClick}
                />
                <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
                <StyledBreadcrumb
                    label="Accessories"
                    deleteIcon={<ExpandMoreIcon />}
                    onClick={handleClick}
                    onDelete={handleClick}
                />
            </Breadcrumbs>
        </div>
    );
}

export default SimpleBreadcrumbs;
