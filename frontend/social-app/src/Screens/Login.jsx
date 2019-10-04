import {Form, Icon, Input, Button, Checkbox} from 'antd';
import * as React from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import AuthenticationService from './AuthenticationService.js'

/*
Screen for the login page
 */
class NormalLoginForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    register = e => {
        this.props.history.push("/register");
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                AuthenticationService
                    .executeJwtAuthenticationService(values.username, values.password)
                    .then((response) => {
                        AuthenticationService.registerSuccessfulLoginForJwt(values.username, response.data.token);
                        console.log(response.data.token)
                        this.props.history.push("/feed");
                    }).catch((e) => {
                    console.log('Error with login!');
                    console.error(e)
                })
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form" style={{marginTop: "100px"}}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <a href="/register" onClick={this.register}>Register now!</a>
                        </Form.Item>
                        <Form.Item>
                            <div style={{alignItems: "center"}}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}></Col>
            </Row>
        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);

export default WrappedNormalLoginForm;
