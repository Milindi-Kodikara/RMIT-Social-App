import React, {Component} from 'react';
import '../event.css';
//one event item being displayed
class EventItem extends React.Component<> {

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
                <button className="register">Register</button>
            </div>
            </div>
        )
    }
}









export default EventItem