import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Layout, Menu} from 'antd';
import Button from "antd/lib/button";
import Feed from "./Screens/Feed";
import Search from "./Screens/Search";
import Calendar from "./Screens/Calendar";
import Login from "./Screens/Login";
import EventDetail from "./Screens/EventDetails";
import AuthenticatedRoute from "./Screens/AuthenticatedRoute";
import LogoutComponent from "./Screens/LogoutComponent";
import {Modal, Form, Input, Radio} from 'antd';
import CreateEventModal from "./Components/CreateEventModal";
import Profile from "./Containers/Profile";

const {Header, Footer} = Layout;

class App extends Component {

    state = {
        visible: false,
        currUserId: ''
    };

    showModal = () => {
        this.setState({visible: true});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    handleCreate = (name: string, description: string, location: string, time: Date, org: string, img: object) => {
        this.setState({visible: false});
        // create event i.e add stuff to the database
        // refresh page maybe to load events
        const event = {name, description, location, time, org, img};
    };

    callbackUsernameFunc = (userId: string) => {
        this.setState({currUserId: userId})
    }

    render() {
        return (
            <div>

                <CreateEventModal visible={this.state.visible} handleCreate={this.handleCreate}
                                  handleCancel={this.handleCancel}/>
                <Router>
                    <Layout style={{minHeight: "100vh"}}>
                        <Header className="header" style={{paddingTop: "10px"}}>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                            >
                                <Menu.Item key="1"><Link to={"/feed"}>Feed</Link></Menu.Item>
                                <Menu.Item key="2"><Link to={"/search"}>Search</Link></Menu.Item>
                                <Menu.Item key="3"><Link to={"/calendar"}>Calendar</Link></Menu.Item>
                                <Menu.Item key="4" style={{float: "right"}}><Link
                                    to={"/logout"}>LogOut</Link></Menu.Item>
                                <Button style={{float: "right", marginTop: "5px", marginRight: "10px"}} type="primary"
                                        onClick={this.showModal}>+
                                </Button>
                                {/*temp event details page until proper nav is made*/}
                            </Menu>
                        </Header>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                             // @ts-ignore
                            <AuthenticatedRoute path="/feed" component={() => <Feed usernameId ={this.state.currUserId}/>}/>
                            // Get the user id from login

                            <AuthenticatedRoute path="/login"
                                // @ts-ignore
                                                component={() => <Login usernameCallback = {this.callbackUsernameFunc}/>}/>
                            <AuthenticatedRoute path="/search" component={Search}/>
                            <AuthenticatedRoute path="/calendar" component={Calendar}/>
                            <AuthenticatedRoute path="/profile" component={Profile}/>
                            <AuthenticatedRoute path="/createEvent" component={CreateEventModal}/>
                            <AuthenticatedRoute path="/eventDetails" component={EventDetail}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        </Switch>
                        <Footer> Created by Jack Kelly | Jono Diver | Luke Shushter | Milindi Kodikara | Sheryl Mantik
                            of
                            Group 33!</Footer>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;
