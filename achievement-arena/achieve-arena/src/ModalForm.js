import React                from "react";
import {Form, Input, Modal} from "antd";

var yes = "";
const ModalForm = ({visible, onCancel, onCreate, form}) =>
{
    return (
        <Modal
            visible={visible}
            title="Editing your profile"
            okText="Submit"
            onCancel={onCancel}
            onOk={onCreate}
        >
            <Form layout="vertical">
                <Form.Item label="Username" name="username">
                    <Input/>
                </Form.Item>
                <Form.Item label="Bio" name="bio">
                    <Input type="textarea"/>
                </Form.Item>
                <Form.Item label="Avatar" name="avatar_src">
                    <Input type="textarea"/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalForm;
