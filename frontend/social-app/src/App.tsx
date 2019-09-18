import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Layout, Menu} from 'antd';
import Button from "antd/lib/button";
import Feed from "./Screens/Feed";
import Search from "./Screens/Search";
import Calendar from "./Screens/Calendar";
import Profile from "./Screens/Profile";
import Login from "./Screens/Login";
import CreateEvent from "./Containers/CreateEvent";
import EventDetail from "./Screens/EventDetails";
import AuthenticatedRoute from "./Screens/AuthenticatedRoute";
const {Header, Footer} = Layout;

const App: React.FC = () => {
    return (
        <Router>
        <Layout style={{minHeight: "100vh"}}>
            <Header className="header" style={{paddingTop: "10px"}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['4']}>
                    <Menu.Item key="1"><Link to={"/feed"}>Feed</Link></Menu.Item>
                    <Menu.Item key="2"><Link to={"/search"}>Search</Link></Menu.Item>
                    <Menu.Item key="3"><Link to={"/calendar"}>Calendar</Link></Menu.Item>
                    <Menu.Item key="4" style={{float: "right"}}><Link to={"/login"}>LogIn</Link></Menu.Item>
                    <Menu.Item key="5" style={{float: "right"}}><Link to={"/profile"}>Profile</Link></Menu.Item>
                    <Menu.Item key="6" style={{float: "right"}}><Link to={"/createEvent"}><Button type={"primary"}>+</Button></Link></Menu.Item>
                    {/*temp event details page until nav is made*/}
                    <Menu.Item key="7"><Link to={"/eventDetails"}>Event Details</Link></Menu.Item>
                </Menu>
            </Header>
            <Switch>
                <Route path="/" exact component={Login}/>
                <AuthenticatedRoute path="/feed" component={Feed}/>
                <AuthenticatedRoute path="/login" component={Login}/>
                <AuthenticatedRoute path="/search" component={Search}/>
                <AuthenticatedRoute path="/calendar" component={Calendar}/>
                <AuthenticatedRoute path="/profile" component={Profile}/>
                <AuthenticatedRoute path="/createEvent" component={CreateEvent}/>
                <AuthenticatedRoute path="/eventDetails" component={EventDetail}/>
            </Switch>
            <Footer>Group 33</Footer>
        </Layout>
        </Router>
    );
}

export default App;
