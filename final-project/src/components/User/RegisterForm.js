import React, { useContext, useState } from 'react'
import {Form, Input, Button, message} from "antd"
import axios from 'axios'
import { useHistory } from 'react-router'
import {UserContext} from "./UserContext"

const RegisterForm = () => {
    let history = useHistory()
    const [form] = Form.useForm()
    const [, setUser] = useContext(UserContext)
    
    const onFinish = (values) => {
        let data = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        axios.post("https://backendexample.sanbersy.com/api/register", data)
        .then((res) => {
            var user = res.data.user
            var token = res.data.token
            var currentUser = {name: user.name, email: user.email, token}
            setUser(currentUser)
            localStorage.setItem("user", JSON.stringify(currentUser))
            message.success("Success, login now!")
            history.push("/login")
            console.log("BERHASIL")
        }).catch((error) => {
            console.log(error)
            message.error(error.response.data.error);
        });
      };
    

    return(
        <Form
        name="register"
        className="register-form"
        form={form}
        scrollToFirstError
        onFinish={onFinish}
        >
                <Form.Item
                name="name"
                label= "Username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Username!',
                },
                ]}
                >
                <Input/>
                </Form.Item>
                <Form.Item 
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email"
                    },
                    {
                        type: 'email',
                        message: "Please input your email with the correct format"
                    }
                ]}
            >
            <Input />      
            </Form.Item>
            <Form.Item
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
            name="confirm"
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
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
            }),
            ]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="success" htmlType="submit" >Register</Button>

            </Form.Item>
        </Form>
    )
}

export default RegisterForm;