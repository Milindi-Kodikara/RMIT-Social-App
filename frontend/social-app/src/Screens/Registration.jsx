import {Form, Icon, Input, Button, Checkbox} from 'antd';
import * as React from "react";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import AuthenticationService from './AuthenticationService.js'

class NormalRegistrationForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            familyName: '',
            studentNo: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values, this.state);
                AuthenticationService
                    .executeJwtAuthenticationService(values.username, values.password)
                    .then((response) => {
                        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                        this.props.history.push("/feed");
                    }).catch((e) => {
                        console.log('Error with registration!');
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
                    <Form onSubmit={this.handleSubmit} className="registration-form" style={{marginTop: "100px"}}>
                    <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your first name!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Software"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your family name!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Engineer"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your student numer!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="s1234567"
                                />,
                            )}
                        </Form.Item>
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
                            <div style={{alignItems: "center"}}>
                                <Button type="primary" htmlType="submit" className="registration-form-button">
                                    Register Now!
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

const WrappedNormalRegistrationForm = Form.create({name: 'normal_registration'})(NormalRegistrationForm);

export default Registration;