import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {Table, Popconfirm, Space, Input} from "antd"
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import {
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import { UserContext } from '../../User/UserContext'

const GameEditorList = () => {
    let history = useHistory()
    const [user, setUser] = useContext(UserContext)
    const [games, setGames] = useState([])
    const [fetch, setFetch] = useState(true)
    const [search, setSearch] = useState(null)


    const columns = [
        {
            title: "Name",
            dataIndex : 'name',
            key : 'name',
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.name < b.name) return -1;
                    if (b.name < a.name) return 1;
                    return 0;
                }
            }
        },
        {
            title: "Platform",
            dataIndex: "platform",
            key: "platform",
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.platform < b.platform) return -1;
                    if (b.platform < a.platform) return 1;
                    return 0;
                }
            },
        },
        {
            title: "Genre",
            dataIndex: "genre",
            key: "genre",
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.genre < b.genre) return -1;
                    if (b.genre < a.genre) return 1;
                    return 0;
                }
            }
        },
        {
            title: "Single Player",
            dataIndex: "singlePlayer",
            align: "center",
            sorter: {
                compare: (a, b) => a.singlePlayer - b.singlePlayer,
            },
        },
        {
            title: "Multi Player",
            dataIndex: "multiplayer",
            align: "center",
            sorter: {
                compare: (a, b) => a.multiplayer - b.multiplayer,
            },
        },
        {
            title: "Release",
            dataIndex: "release",
            sorter: {
                compare: (a, b) => a.release - b.release,
            },
        },
        {
            title: "Image URL",
            dataIndex: "image_url",
            key: "image_url",
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.image_url < b.image_url) return -1;
                    if (b.image_url < a.image_url) return 1;
                    return 0;
                }
            },
            render: (text) => (
                <p
                    style={{
                        maxWidth: 200,
                        maxHeight: "10em",
                        overflow: "hidden",
                    }}
                >
                    {text}
                </p>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                        <Link to={`/game-editor/edit/${record.id}`}>
                            <EditOutlined />
                        </Link>
                        <Popconfirm
                            placement="topRight"
                            title={`Are you sure want to delete ${record.title}?`}
                            onConfirm={() => {
                                handleDelete(record.id);
                            }}
                            okText="Yes"
                            cancelText="No"
                        >
                            <div style={{ color: "red", cursor: "pointer" }}>
                                <DeleteOutlined />
                            </div>
                        </Popconfirm>
                    </Space>
            )
            
        }
    ]

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`)
            setGames(
                result.data.map(el => {
                    const {id, name, genre, singlePlayer, multiplayer, platform, release, image_url} = el
                    return {id, name, genre, singlePlayer, multiplayer, platform, release, image_url}
                })
            )
        }
        if(fetch){
            fetchData()
            setFetch(false)
        }
    }, [fetch])

    const handleSearch = () => {
        if(search){
            let value = games.filter((el) => {
                return el.name.toLowerCase().includes(search)
            });
            setGames(value);
        }

        setSearch("")
    }

    const handleDelete = (id) => {
        let header = user.token
        axios.delete(`https://backendexample.sanbersy.com/api/data-game/${id}`,{headers: { Authorization: `Bearer ${header}` }})
            .then((res) =>{
                setFetch(true)
            })
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const {Search} = Input
    return(
        <div style={{
            padding: "10px"
        }}>
            <h1>Game List</h1>
            <Search placeholder="input search text" allowClear value={search} onChange={handleChange} onSearch={(value) => handleSearch(value)} style={{ width: 200 }} />
            <Table scroll={{ x: "max-content" }} columns={columns} dataSource = {games} />
        </div>
    )

}

export default GameEditorList;