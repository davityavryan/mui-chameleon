import React from 'react';

import DateFnsUtils from '@date-io/date-fns';

import Grid from '@material-ui/core/Grid';
import { TextFieldProps } from '@material-ui/core/TextField';

import ScheduleIcon from '@material-ui/icons/Schedule';

import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

const inputVariants: TextFieldProps['variant'][] = ['standard', 'outlined', 'filled'];

function DateTimePickers() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {inputVariants.map((variant) => (
                <Grid key={variant} justify="space-around" spacing={4} container>
                    <Grid sm={4} item>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="Date picker inline"
                            value={selectedDate}
                            inputVariant={variant}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            fullWidth
                        />
                    </Grid>

                    <Grid sm={4} item>
                        <KeyboardDatePicker
                            margin="normal"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            inputVariant={variant}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            fullWidth
                        />
                    </Grid>

                    <Grid sm={4} item>
                        <KeyboardTimePicker
                            margin="normal"
                            label="Time picker"
                            value={selectedDate}
                            inputVariant={variant}
                            keyboardIcon={<ScheduleIcon />}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            ))}
        </MuiPickersUtilsProvider>
    );
}

export default DateTimePickers;
