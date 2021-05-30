import React, { useContext } from 'react'
import {Form, Input, Button, message} from "antd"
import {UserOutlined, LockOutlined} from "@ant-design/icons"
import axios from 'axios'
import { UserContext } from './UserContext'
import { useHistory } from 'react-router'


const ChangePassword = () => {
    let history = useHistory()
    const [user] = useContext(UserContext)

    const onFinish = (values) => {
        let data = {
            current_password: values.currentPassword,
            new_password: values.newPassword,
            new_confirm_password: values.confirmPassword
        }
        let header = user.token
        axios.post("https://backendexample.sanbersy.com/api/change-password"
        , data, {
            headers: { Authorization: `Bearer ${header}` },
        })
        .then((res) => {
            message.success("You have your new password now!")
            history.push("/login")
        })
    }

    return(
        <Form
        name="change-password"
        className="change-password-form"
        initialValues={{remember: true}}
        onFinish={onFinish}
        >

            <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                {
                    required: true,
                    message: 'Please input your current password!',
                },
            ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
            name="newPassword"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your new password!',
            },
            ]}
            hasFeedback
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error('The new two passwords that you entered do not match!'));
                },
            }),
            ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item>
            <Button type="success" htmlType="submit" >Submit</Button>
            </Form.Item>
        </Form>

    )
}

export default ChangePassword;