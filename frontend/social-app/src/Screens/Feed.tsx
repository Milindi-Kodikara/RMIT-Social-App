import React from 'react';
import {Layout} from "antd";
import EventList from "../Containers/EventList";
import ProfileOverview from "../Containers/ProfileOverview";
const { Sider, Content } = Layout;
const Feed: React.FC = () => {
    return (
        <Layout>
            <Sider style={{background: "#fff"}}><ProfileOverview/></Sider>
            <Content><EventList/></Content>
        </Layout>
    );
}

export default Feed;