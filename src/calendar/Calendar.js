import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment);

export default class Calendar extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     CalendarData: []
        // }
    }

    componentWillMount() {
        // this.setState({
        //     currentData: CalendarData
        // })
    }

    render() {
        return (
            <BigCalendar
                {...this.props}
                events={events}
                defaultDate={new Date(moment())}
            />
        )
    }
}