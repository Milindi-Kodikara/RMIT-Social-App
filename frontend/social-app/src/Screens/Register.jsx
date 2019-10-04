import React from 'react';
import {
    Form,
    Input,
    Button, Upload, Icon,
} from 'antd';
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

/*
Screen to register a user for the application
 */
class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                //ask the user to login
                this.props.history.push("/login");
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {TextArea} = Input;
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            }
        };

        return (
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Item label="Name">
                            {getFieldDecorator('Name', {
                                rules: [{required: true, message: 'Please input your name!'}],
                            })(<Input/>)}
                        </Form.Item>

                        <Form.Item label="About Me">
                            {getFieldDecorator('description', {
                                rules: [{required: true, message: 'Please input the description of yourself!'}],
                            })(<TextArea/>)}
                        </Form.Item>

                        <Form.Item label="E-mail">
                            {getFieldDecorator('email', {
                                rules: [
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(<Input.Password/>)}
                        </Form.Item>
                        <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('img', {
                                rules: [{required: true, message: 'Please upload an image for your profile picture!'}],
                            })(
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload"/>Upload Image
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}></Col>
            </Row>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(Register);

export default WrappedRegistrationForm;
