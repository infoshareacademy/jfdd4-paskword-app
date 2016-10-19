import React from 'react';
import BigCalendar from 'react-big-calendar';

let Timeslots = React.createClass({
    render(){
        return (
            <BigCalendar
                {...this.props}
                events={this.props.events}
                step={15}
                timeslots={8}
                defaultView='week'
                defaultDate={new Date()}
            />
        )
    }

})


export default Timeslots;