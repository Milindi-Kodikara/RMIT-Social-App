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
        
        const organisers = {
            tpc: 'The Programming Club',
            csit: 'CSIT Society'
        }

        let events = [
            {
                id: 'abcde',
                username: 'sept',
                name: 'Intro to SE ',
                startTime: new Date(),
                finishTime: new Date(),
                location: '80.5.10',
                organiser: organisers.tpc,
                description: 'Softwares are cool . . apparently',
                imgURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }, {
                id: 'abcdf',
                username: 'sept',
                startTime: new Date(),
                finishTime: new Date(),
                name: 'Struc. Prog.',
                location: '12.10.11',
                organiser: organisers.csit,
                description: 'Make Tim W. proud. P.s python sucks ><',
                imgURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }, {
                id: 'abcdg',
                username: 'sept',
                startTime: new Date(1),
                finishTime: new Date(),
                name: "Mili is da best!!!!",
                location: '80.06.11',
                organiser: organisers.tpc,
                description: 'Story of an amazing hooman ~>,<~ ',
                imgURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }
        ]
        return (<div>
                {events.map((event) => <EventItem
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
                />)}

            </div>
        )
    }
}

export default EventList
