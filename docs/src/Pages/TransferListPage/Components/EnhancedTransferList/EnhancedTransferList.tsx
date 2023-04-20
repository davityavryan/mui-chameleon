import React from 'react';

import {
    List,
    Card,
    CardHeader,
    ListItem,
    ListItemText,
    ListItemIcon,
    Checkbox,
    Button,
    Divider,
    Unstable_Grid2 as Grid,
} from '@mui/material';

function not(a: number[], b: number[]) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: number[], b: number[]) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: number[], b: number[]) {
    return [...a, ...not(b, a)];
}

function EnhancedTransferList() {
    const [checked, setChecked] = React.useState<number[]>([]);
    const [left, setLeft] = React.useState<number[]>([0, 1, 2, 3]);
    const [right, setRight] = React.useState<number[]>([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items: number[]) => intersection(checked, items).length;

    const handleToggleAll = (items: number[]) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title: React.ReactNode, items: number[]) => (
        <Card>
            <CardHeader
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                        disabled={items.length === 0}
                        inputProps={{ 'aria-label': 'all items selected' }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
                px={2}
                py={1}
            />
            <Divider />
            <List
                sx={{ width: 200, height: 230, bgcolor: 'background.paper', overflow: 'auto' }}
                dense
                component="div"
                role="list"
            >
                {items.map((value: number) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Card>
    );

    return (
        <Grid spacing={2} justifyContent="center" alignItems="center" m="auto" container>
            <Grid>{customList('Choices', left)}</Grid>
            <Grid>
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ mx: 0, my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ mx: 0, my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>
            <Grid>{customList('Chosen', right)}</Grid>
        </Grid>
    );
}

export default EnhancedTransferList;
