import React, {Component} from 'react';
import {Avatar, Card, Icon, Skeleton} from "antd";
import Meta from "antd/lib/card/Meta";
import Descriptions from "antd/lib/descriptions";

interface ProfileOverviewProps {
}

interface ProfileOverviewState {
}

//have to read the details from the database
class Profile extends Component <ProfileOverviewProps, ProfileOverviewState> {

    constructor(props: ProfileOverviewProps) {
        super(props);
    }

    render() {

        //dummy profile, need to read in from the backend
        let profile = {
            id: 'abcde',
            name: 'Wombat da sok',
            description: 'I love going to events',
            imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
        };

        let div = (
            <Card
                hoverable
                style={{minWidth: "400px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}
                cover={<div style={{width: "100%", height: "500px", overflow: "hidden", position: "relative"}}>
                    <img alt="eventImage" src={profile.imageURL}
                         style={{width: "100%", height: "auto", position: "absolute", marginTop: "-80px"}}/>
                </div>}
            >

                <Meta title={profile.name.toUpperCase()}/>
                <Meta description={profile.description} />

                <Descriptions style={{marginTop: "10px"}} title="Registered Events">
                    {/*Call this function in a loop to display all the registered events*/}
                    <Skeleton avatar active>
                        <Meta
                            avatar={
                                <Avatar src={profile.imageURL}/>
                            }
                        />
                    </Skeleton>
                </Descriptions>
            </Card>

        )
        return div;
    }
}

export default Profile