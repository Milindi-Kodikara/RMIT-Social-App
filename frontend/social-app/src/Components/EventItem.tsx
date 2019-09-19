import React from 'react';
import {Skeleton, Switch, Card, Icon, Avatar} from 'antd';
import {Link} from "react-router-dom";

const {Meta} = Card;

interface EventItemProps {
    id: string;
    imageURL: object,
    url: string,
    start: Date;
    end: Date;
    name: string;
    description: string;
    location: string;
    colour: string;
    organiser: string;
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
                        <p><Icon type="clock-circle"/> {this.props.start.toLocaleString('en-GB', options)}</p>,
                        //need to do the router stuff here properly
                        <Link to={"eventDetails/".concat(this.props.id)}><Icon type="ellipsis"/></Link>,
                    ]}
                >
                    <Skeleton loading={!loading} avatar active>
                        <Meta
                            avatar={
                                <Avatar src={this.props.url}/>
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