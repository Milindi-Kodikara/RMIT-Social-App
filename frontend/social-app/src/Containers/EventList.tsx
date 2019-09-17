import React, {Component} from 'react';
import EventItem from "../Components/EventItem";

interface EventListProps{

}

interface EventListState{

}

//List of events
class EventList extends Component<EventListProps, EventListState> {

    constructor(props:EventListProps ) {
        super(props);
        this.state = {}
    }

    render() {

        const organisers = {
            tpc: 'The Programming Club',
            csit: 'CSIT Society'
        }

        let events = [
            {
                id: 'abcde',
                eventDate: new Date(),
                start: new Date(),
                end: new Date(),
                name: 'Intro to SE ',
                location: '80.5.10',
                organiser: organisers.tpc,
                description: 'Softwares are cool . . apparently',
                imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }, {
                id: 'abcdf',
                eventDate: new Date(),
                start: new Date(),
                end: new Date(),
                name: 'Struc. Prog.',
                location: '12.10.11',
                organiser: organisers.csit,
                description: 'Make Tim W. proud. P.s python sucks ><',
                imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }, {
                id: 'abcdg',
                eventDate: new Date(),
                start: new Date(1),
                end: new Date(),
                name: "Mili is da best!!!!",
                location: '80.06.11',
                organiser: organisers.tpc,
                description: 'Story of an amazing hooman ~>,<~ ',
                imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
            }
        ]
        return (<div>
                {events.map((event) => <EventItem
                    key={event.id}
                    id={event.id}
                    //clubName={"TPC"}
                    colour={"#FF0001"}
                    name={event.name}
                    start={event.start}
                    end={event.end}
                    organiser={event.organiser}
                    description={event.description}
                    navigateToEventDetails={(eventID:string) => {}}
                    location={event.location}
                    imageURL={<img className="image" src={event.imageURL}/>}
                />)}

            </div>
        )
    }
}

export default EventList
