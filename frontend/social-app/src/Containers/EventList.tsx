import React, {Component} from 'react';
import EventItem from "../Components/EventItem";
import EventDataService from '../api/EventDataService';


/*
Component for reading in a list of event from the backend
 */
interface EventListProps {

}

interface EventListState {
    events: {
        id: string;
        username: string,
        imgURL: string,
        startTime: Date;
        finishTime: Date;
        name: string;
        description: string;
        location: string;
        organiser: string;
    }[],
    isLoading: boolean
}

class EventList extends Component<EventListProps, EventListState> {

    constructor(props: EventListProps) {
        super(props);
        this.state = {
            events: [],
            isLoading: true
        }
    }

    componentDidMount() {
        console.log("test")
        EventDataService.showAllEvents()
            .then(
                response => {
                    this.setState({events: response.data, isLoading: false})
                    console.log(response.data)
                }
            )
        console.log(this.state.events)
    }

    render() {

        const {isLoading, events} = this.state

        return (<div>
                {!isLoading ? (
                    events.map((event) =>
                        <EventItem
                            key={event.id}
                            id={event.id}
                            username={event.username}
                            name={event.name}
                            image={<img className="image" src={event.imgURL}/>}
                            location={event.location}
                            startTime={event.startTime}
                            finishTime={event.finishTime}
                            organiser={event.organiser}
                            description={event.description}
                            imgURL={event.imgURL}
                            colour={"#FF0001"}
                            //clubName={"TPC"}
                        />)) : <p>Loading ...</p>}

            </div>
        )
    }
}

export default EventList
