import {Button, Form, Icon, Input, message, Modal, Radio, Upload} from "antd";
import React from "react";
import {DatePicker, TimePicker} from 'antd';

interface CreateEventModalProps {
    visible: boolean,

    handleCancel(): void,

    handleCreate(name: string, description: string, location: string, time: Date, org: string, img: object): void,

    form: any
}

class CreateEventModal extends React.Component<CreateEventModalProps, {}> {
    render() {
        const {getFieldDecorator} = this.props.form;
        const {TextArea} = Input;
        const {RangePicker} = DatePicker;
        const rangeTimeValue = 'range-time-picker';

        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            }
        };
        return <Modal
            visible={this.props.visible}
            title="Create a new event"
            okText="Create"
            onCancel={this.props.handleCancel}
            onOk={() => {
                const {form} = this.props;
                form.validateFields((err: any, values: any) => {
                    if (err) {
                        return;
                    }
                    console.log('Received values of form: ', values);
                    form.resetFields();
                    //send the values to app
                    this.props.handleCreate(values.name, values.description, values.location, values.rangeTimeValue, values.org, values.img);
                });
            }}
        >
            <Form layout="vertical">
                <Form.Item label="Event name">
                    {getFieldDecorator('name', {
                        rules: [{required: true, message: 'Please input the name of the event!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="Desription">
                    {getFieldDecorator('description', {
                        rules: [{required: true, message: 'Please input the description of the event!'}],
                    })(<TextArea/>)}
                </Form.Item>
                <Form.Item label="Location">
                    {getFieldDecorator('location', {
                        rules: [{required: true, message: 'Please input the location of the event!'}],
                    })(<Input/>)}
                </Form.Item>
                <Form.Item label="Date & Time">
                    {getFieldDecorator('range-time-picker', {
                        rules: [{required: true, message: 'Please input the date and time of the event!'}],
                    })(
                        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                    )}
                </Form.Item>

                <Form.Item label="Organiser" className="collection-create-form_last-form-item">
                    {getFieldDecorator('org', {
                        rules: [{required: true, message: 'Please select the organiser of the event!'}],
                    })(
                        <Radio.Group>
                            <Radio value="csit">The Programming Club</Radio>
                            <Radio value="tpc">CSIT Society</Radio>
                        </Radio.Group>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('img', {
                        rules: [{required: true, message: 'Please upload an image for the event!'}],
                    })(
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload"/>Upload Image
                        </Button>
                    </Upload>
                    )}
                </Form.Item>

            </Form>
        </Modal>

    }
}

export default Form.create<CreateEventModalProps>({name: 'form_in_modal'})(CreateEventModal);
