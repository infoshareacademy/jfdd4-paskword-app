import React from 'react';
import BigCalendar from 'react-big-calendar';

// import globalize from 'globalize';
//
// console.log(globalize);
//
// BigCalendar.setLocalizer(
//     BigCalendar.globalizeLocalizer(globalize)
// );
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);
let Timeslots = React.createClass({

    render(){
        return (
            <BigCalendar
                {...this.props}
                events={this.props.events}
                step={60}
                views={['week']}
                timeslots={1}
                defaultView='week'
                defaultDate={new Date()}
            />
        )
    }
})


export default Timeslots;