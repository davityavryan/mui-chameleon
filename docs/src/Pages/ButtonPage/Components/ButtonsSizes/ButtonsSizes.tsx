import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import useStyles from './ButtonsSizes.style';

function ButtonsSizes() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </div>
            <div>
                <Button variant="outlined" size="small" color="primary">
                    Small
                </Button>
                <Button variant="outlined" size="medium" color="primary">
                    Medium
                </Button>
                <Button variant="outlined" size="large" color="primary">
                    Large
                </Button>
            </div>
            <div>
                <Button variant="contained" size="small" color="primary">
                    Small
                </Button>
                <Button variant="contained" size="medium" color="primary">
                    Medium
                </Button>
                <Button variant="contained" size="large" color="primary">
                    Large
                </Button>
            </div>
            <div>
                <IconButton aria-label="delete" size="small">
                    <ArrowDownwardIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
}

export default ButtonsSizes;
