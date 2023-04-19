import React from 'react';

import dayjs from 'dayjs';

import {
    LocalizationProvider,
    DatePicker,
    MobileDatePicker,
    DesktopDatePicker,
    StaticDatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';

function DateTimePickers() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'MobileDatePicker', 'DesktopDatePicker', 'StaticDatePicker']}>
                <DemoItem label="Desktop variant">
                    <DesktopDatePicker defaultValue={dayjs('2023-03-14')} />
                </DemoItem>
                <DemoItem label="Mobile variant">
                    <MobileDatePicker defaultValue={dayjs('2023-03-14')} />
                </DemoItem>
                <DemoItem label="Responsive variant">
                    <DatePicker defaultValue={dayjs('2023-03-14')} />
                </DemoItem>
                <DemoItem label="Static variant">
                    <StaticDatePicker defaultValue={dayjs('2023-03-14')} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateTimePickers;
