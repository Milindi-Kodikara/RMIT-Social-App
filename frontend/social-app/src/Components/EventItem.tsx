import React from 'react';
import '../App.css';

interface EventItemProps {
    id: string;
    imageURL: object,
    start: Date;
    end: Date;
    name: string;
    description: string;
    location: string;
    colour: string;
    organiser: string;

    navigateToEventDetails(eventID: string): void

}

interface EventItemState {
}

export default class EventItem extends React.Component<EventItemProps, EventItemState> {



    render() {
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true

        };
        return <div onClick={() => this.props.navigateToEventDetails(this.props.id)}>
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.organiser}</p>
                <p>{this.props.location}</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>{this.props.start.toLocaleString('en-GB', options)}</p></div>
                </div>
            </div>
        </div>
    }
}