import React from 'react';
import {Layout} from "antd";
import EventList from "../Containers/EventList";
import Profile from "../Containers/Profile";
import Col from "antd/es/grid/col";
import Row from "antd/lib/grid/row";

const {Sider, Content} = Layout;
const Feed: React.FC = () => {
    return (
        <Row>
            <Layout>
                <Col span={8} style={{background: "#bec2cb"}}>
                    <Sider style={{background: "#bec2cb", margin: "25px"}}><Profile/></Sider>
                </Col>
                <Col span={16} style={{background: "#bec2cb"}}>
                    <Content style={{background: "#bec2cb"}}><EventList/></Content>
                </Col>
            </Layout>
        </Row>
    );
}

export default Feed;