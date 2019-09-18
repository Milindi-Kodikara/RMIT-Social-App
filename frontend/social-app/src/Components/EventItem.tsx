import React from 'react';
import {Skeleton, Switch, Card, Icon, Avatar} from 'antd';

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

    navigateToEventDetails(eventID: string): void

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
                        //to go to the more detailed page
                        <Icon type="ellipsis" onClick={() => this.props.navigateToEventDetails(this.props.id)}/>,
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