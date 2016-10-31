import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import $ from 'jquery';
BigCalendar.momentLocalizer(moment);

export default (props) => {

    return (
        <BigCalendar
            {...props}
            step={60}
            views={['week']}
            timeslots={1}
            defaultView='week'
            selectable={true}
            onSelectSlot={(event) => console.log(event)}
            defaultDate={new Date()}
        />
    )
}
