import React, { useContext } from 'react'
import {Form, Input, Button, message} from "antd"
import {UserOutlined, LockOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom"
import axios from 'axios'
import {UserContext} from "./UserContext"

const LoginForm = () =>{

    const [, setUser] = useContext(UserContext)
 
    const onFinish = (values) => {
        let data = {
            email: values.email,
            password: values.password
        }
        axios.post("https://backendexample.sanbersy.com/api/user-login", data)
        .then( (res) => {
            var user = res.data.user
            var token = res.data.token
            var currentUser = {name : user.name, email: user.email, token}
            setUser(currentUser)
            console.log("Berhasil")
        })
        .catch((err) => {
            message.error(err.response.data.error)
        })
    }

    return(
        <Form
            name="login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password"
                    },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
            />
            </Form.Item>
            <Form.Item>
                <Button type="success" htmlType="submit" >Submit</Button>
                <br/>
                <br/>
                Don't have an account? <Link to="/register">Register here!</Link>
            </Form.Item>
        
        </Form>
    )
}

export default LoginForm;