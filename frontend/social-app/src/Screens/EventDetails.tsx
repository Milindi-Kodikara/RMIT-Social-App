import React, {Component} from 'react';
import '../App.css';

interface EventDetailProps{
    id:string,
    imageURL: object,
    name:string
    organiser:string,
    description: string,
    location: string,
    start: string,
    end: string,

}

interface EventDetailState{

}

class EventDetail extends Component <EventDetailProps, EventDetailState>{

    constructor(props:EventDetailProps ) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="layout">
            <div className="outline">
                <div className="image">
                    {this.props.imageURL}
                    </div>
                <div className="card_outline">
                    <div>
                        <div className="name">
                            {this.props.name}
                        </div>
                        <div className="organiser">
                            {this.props.organiser}
                        </div>
                        <div className="description">
                            {this.props.description}
                        </div>
                        <div className="location">
                        {this.props.location}
                        </div>
                        <div className="date">
                       Start:  {this.props.start}
                        </div>
                        <div className="date">
                       End:  {this.props.end}
                        </div>
                    </div>
                </div>
                <button className="button">Register</button>
            </div>
            </div>
        )
    }
}
export default EventDetail