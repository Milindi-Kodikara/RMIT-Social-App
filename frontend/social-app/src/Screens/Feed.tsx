import React from 'react';
import {Layout} from "antd";
import EventList from "../Containers/EventList";
import Profile from "../Containers/Profile";
import Col from "antd/es/grid/col";
import Row from "antd/lib/grid/row";
/*
Screen for the main feed
 */
const {Sider, Content} = Layout;
interface Props{
    usernameId: string
}

const Feed: React.FC<Props> = (props: Props) => {

    console.log(props.usernameId)
    
        return (
            <Row>
                <Layout>
                    <Col span={8} style={{background: "#bec2cb"}}>
                        <Sider style={{background: "#bec2cb", margin: "25px"}}><Profile id={props.usernameId}/></Sider>
                    </Col>
                    <Col span={16} style={{background: "#bec2cb"}}>
                        <Content style={{background: "#bec2cb"}}><EventList/></Content>
                    </Col>
                </Layout>
            </Row>
        );
    }

export default Feed;