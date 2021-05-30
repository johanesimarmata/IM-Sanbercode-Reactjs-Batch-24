import React, { useContext } from 'react'
import {Layout, Menu} from "antd"
import {Link} from "react-router-dom"
import {Form, Input, Button} from "antd"
import { UserContext } from '../User/UserContext'

const HeaderComponent = () => {
    const {Header} = Layout
    const [user] = useContext(UserContext)

    return(
        <Header className="layout">
          <div className="logo"/>       
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']} style={{float: "right"}}>
            <Menu.Item key="/"><Link to="/">Home</Link> </Menu.Item>
            <Menu.Item key="/movies"><Link to="/movies">Movies</Link></Menu.Item>
            <Menu.Item key="/games"><Link to="/games">Games</Link></Menu.Item>
            {user ? 
              <Menu.Item key="welcome">Welcome, {user.name}</Menu.Item> :
              <Menu.Item key="/login"><Link to="/login">Login</Link></Menu.Item>
            }
          </Menu>
        </Header>
    )
}
export default HeaderComponent;