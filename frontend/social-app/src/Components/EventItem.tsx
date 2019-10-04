import React from 'react';
import {Skeleton, Switch, Card, Icon, Avatar} from 'antd';
import {Link} from "react-router-dom";

const {Meta} = Card;

/*
Component for one singular event item for which the skeleton is provided
So as to display in the feed one by one
 */
interface EventItemProps {
    id: string;
    username: string,
    name: string,
    image: object,
    location: string;
    startTime: Date;
    finishTime: Date;
    organiser: string;
    description: string;
    imgURL: string,
    colour: string;
}

interface EventItemState {
}

export default class EventItem extends React.Component<EventItemProps, EventItemState> {

    state = {
        loading: true,
    };

    render() {
        const {loading} = this.state;
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true

        };
        return (<div>
                <Card
                    style={{margin: 25}}
                    actions={[
                        <p><Icon type="environment"/> {this.props.location}</p>,
                        <p><Icon type="clock-circle"/> {this.props.startTime.toLocaleString('en-GB', options)}</p>,
                        //Proper routing will be added with the integration of the backend
                        <Link to={"eventDetails/".concat(this.props.id)}><Icon type="ellipsis"/></Link>,
                    ]}
                >
                    <Skeleton loading={!loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={this.props.imgURL}/>
                            }
                            title={this.props.name}
                            description={this.props.organiser}
                        />
                    </Skeleton>
                </Card>
            </div>
        );

    }
}