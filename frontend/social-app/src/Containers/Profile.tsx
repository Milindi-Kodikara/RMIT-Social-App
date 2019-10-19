import React, {Component} from 'react';
import {Avatar, Card, Icon, Skeleton} from "antd";
import Meta from "antd/lib/card/Meta";
import Descriptions from "antd/lib/descriptions";
import ProfileDataService from "../api/ProfileDataService";

/*
Container for the profile of a user
To show their registered events and their details
 */
interface ProfileOverviewProps {
    id: string
}

interface ProfileOverviewState {
    profile: {
        username: string,
        aboutMe: string,
        imageURL: string
    };
    isLoading: boolean;
}

class Profile extends Component <ProfileOverviewProps, ProfileOverviewState> {

    constructor(props: ProfileOverviewProps) {
        super(props);
        this.state = {
            profile: {
                username: '',
                aboutMe: '',
                imageURL: ''
            },
            isLoading: true,
        }
    }

    componentDidMount(): void {
        console.log("Profile is getting loaded")
        console.log(this.props.id)
        ProfileDataService.showProfile(this.props.id)
            .then(
                response => {
                    this.setState({profile: response.data, isLoading: false})
                    console.log(response.data)
                }
            )
        console.log(this.state.profile)
    }


    render() {

        const {isLoading, profile} = this.state

        let div = (
            <Card
                hoverable
                style={{minWidth: "400px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}
                cover={<div style={{width: "100%", height: "500px", overflow: "hidden", position: "relative"}}>
                    <img alt="eventImage" src={profile.imageURL}
                         style={{width: "100%", height: "auto", position: "absolute", marginTop: "-80px"}}/>
                </div>}
            >

                <Meta title={profile.username.toUpperCase()}/>
                <Meta description={profile.aboutMe}/>

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