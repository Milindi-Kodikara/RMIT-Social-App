import React, {Component} from 'react';
import EventList from "./EventList";
import '../event.css';

class EventFeed extends React.Component<> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (<div className="event_back" >
                <h1 className="event_title">EVENTS THIS WEEK <div><button className="new_event">+</button></div></h1>
                <EventList/>
                See who else is coming . . .
            </div>
            /*The bottom part should go in a different function according to the number of people attending*/
        )
    }
}

export default EventFeed