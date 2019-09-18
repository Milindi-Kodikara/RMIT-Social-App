import React, {Component} from 'react';
import EventItem from "../Containers/EventList";
import {Card, Icon} from "antd";
import Meta from "antd/lib/card/Meta";
import Col from "antd/es/grid/col";
import Row from "antd/lib/grid/row";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";

interface EventDetailProps {
    eventID:string,
}

interface EventDetailState {
    registered: boolean;
}

//need to read in the event details from the database

class EventDetail extends Component <EventDetailProps, EventDetailState> {

    constructor(props: EventDetailProps) {
        super(props);
        this.state = {
            registered: false,
        }
    }

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

        let events = {
            id: 'abcde',
            eventDate: new Date(),
            start: new Date(),
            end: new Date(),
            name: 'Intro to SE ',
            location: '80.5.10',
            organiser: 'bloop',
            description: 'Softwares are cool . . apparently',
            imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
        };

        let div = (
            <Row>
                <Col span={4}></Col>
                <Col span={16}>
                    <Card
                        hoverable
                        style={{marginTop: "50px"}}
                        cover={<div style={{width: "100%", height: "500px", overflow: "hidden", position: "relative"}}>
                            <img alt="eventImage" src={events.imageURL}
                                 style={{width: "100%", height: "auto", position: "absolute", marginTop: "-500px"}}/>
                        </div>}
                    >
                        <Row>
                            <Col span={16}>
                                <Meta title={events.name} description={events.description}/>
                            </Col>
                            <Col span={8}>
                            <Button type="primary" block onClick={() => {
                                this.setState({registered: !this.state.registered})
                            }}>{this.state.registered ? " Cancel " : "Register"}
                            </Button>
                            </Col>
                        </Row>
                        <Descriptions title="Info" style={{marginTop: "50px"}}>
                            <Descriptions.Item label="Organiser">{events.organiser}</Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item label="Location">{events.location}</Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item> </Descriptions.Item>
                            <Descriptions.Item
                                label="Start time">{events.start.toLocaleString('en-GB', options)}</Descriptions.Item>
                            <Descriptions.Item
                                label="End time">{events.end.toLocaleString('en-GB', options)}</Descriptions.Item>
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