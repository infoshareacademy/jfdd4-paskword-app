import React from 'react';
import BigCalendar from 'react-big-calendar';

// import globalize from 'globalize';
//
// console.log(globalize);
//
// BigCalendar.setLocalizer(
//     BigCalendar.globalizeLocalizer(globalize)
// );

let Timeslots = React.createClass({

    render(){
        return (
            <BigCalendar
                {...this.props}
                events={this.props.events}
                step={15}
                views={['week']}
                timeslots={8}
                defaultView='week'
                defaultDate={new Date()}
            />
        )
    }

})


export default Timeslots;