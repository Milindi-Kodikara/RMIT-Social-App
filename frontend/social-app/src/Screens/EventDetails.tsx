import React, {Component} from 'react';
import EventItem from "../Containers/EventList";
import {Card, Icon} from "antd";
import Meta from "antd/lib/card/Meta";
import Col from "antd/es/grid/col";
import Row from "antd/lib/grid/row";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import EventDataService from '../api/EventDataService';

/*
Screen for the displaying the details of a singular event
 */
interface EventDetailProps {
}

interface EventDetailState {
    eventID: string;
    event: {
        id: string;
        username: string,
        name: string;
        location: string;
        startTime: Date;
        endTime: Date;
        organiser: string;
        description: string;
        imgURL: string,
    };
    isLoading: boolean;
    registered: boolean;
}

class EventDetail extends Component <EventDetailProps, EventDetailState> {

    constructor(props: EventDetailProps) {
        super(props);
        this.state = {
            eventID: window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1),
            event: {
                id: '',
                username: '',
                name: '',
                location: '',
                startTime: (new Date()),
                endTime: (new Date()),
                organiser: '',
                description: '',
                imgURL: '',
            },
            isLoading: true,
            registered: false,
        }
        console.log(this.state.eventID);
    }

    componentDidMount() {
        console.log("test")
        EventDataService.showEvent(this.state.eventID)
            .then(
                response => {
                    this.setState({event: response.data, isLoading: false})
                    console.log(response.data)
                }
            )
        console.log(this.state.event)
    }

    render() {

        const {isLoading, event} = this.state

        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true

        };

        let div = (
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Card
                        hoverable
                        style={{marginTop: "50px"}}
                        cover={<div style={{width: "100%", height: "500px", overflow: "hidden", position: "relative"}}>
                            <img alt="eventImage" src={event.imgURL}
                                 style={{width: "100%", height: "auto", position: "absolute", marginTop: "-500px"}}/>
                        </div>}
                    >
                        <Row>
                            <Col span={16}>
                                <Meta title={event.name} description={event.description}/>
                            </Col>
                            <Col span={8}>
                                <Button type="primary" block onClick={() => {
                                    this.setState({registered: !this.state.registered})
                                }}>{this.state.registered ? " Cancel " : "Register"}
                                </Button>
                            </Col>
                        </Row>
                        <Descriptions title="Info" style={{marginTop: "50px"}}>
                            <Descriptions.Item label="Organiser">{event.organiser}</Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item label="Location">{event.location}</Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item
                                label="Start time">{event.startTime.toLocaleString('en-GB', options)}</Descriptions.Item>
                            <Descriptions.Item
                                label="End time">{event.endTime.toLocaleString('en-GB', options)}</Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>
                <Col span={4}></Col>
            </Row>
        )
        return div;
    }
}

export default EventDetail