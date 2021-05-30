import React, {useContext, useState} from 'react'
import {Layout, Menu, Tag} from "antd"
import {
    UserOutlined,
    PlayCircleOutlined,
    LaptopOutlined,
    UnlockOutlined,
    LogoutOutlined,
    PlusCircleOutlined,
    EditOutlined

  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../User/UserContext';

const SiderComponent = () => {
    
    const [user, setUser] = useContext(UserContext)
    const {Sider} =  Layout
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false)
  
    const onCollapsed = isCollapsed => {
        setCollapsed(isCollapsed)
    }

    const logout = () => {
      setUser(null)
      localStorage.removeItem("user")
    }

    return(
      <>
        {
          user !== null &&
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapsed}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub0" icon={<UserOutlined />} title="User">
              <Menu.Item><Tag icon={<UserOutlined />} color="success">{user.name}</Tag></Menu.Item>            
              <Menu.Item key="/change-password"><Link to="/change-password"><UnlockOutlined /> Change Password</Link></Menu.Item>
              <Menu.Item key="/logout" onClick={logout}><LogoutOutlined /> Logout</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<PlayCircleOutlined />} title="Movie Editor">
              <Menu.Item key="3"><Link to="/movie-editor/create"><PlusCircleOutlined />Add Movie</Link></Menu.Item>
              <Menu.Item key="/movie-editor"><Link to="/movie-editor"><EditOutlined />Movie Editor</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Game Editor">
              <Menu.Item key="6"><Link to="/game-editor/create"><PlusCircleOutlined />Add Game</Link></Menu.Item>
              <Menu.Item key="/game-editor"><Link to="/game-editor"><EditOutlined />Game Editor</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        }
      </>
    )
}

export default SiderComponent;