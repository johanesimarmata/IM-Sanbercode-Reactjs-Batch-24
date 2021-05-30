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

const MovieEditorList = () => {
    let history = useHistory()
    const [user, setUser] = useContext(UserContext)
    const [movies, setMovies] = useState([])
    const [fetch, setFetch] = useState(true)
    const [search, setSearch] = useState(null)


    const columns = [
        {
            title: "Title",
            dataIndex : 'title',
            key : 'title',
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.title < b.title) return -1;
                    if (b.title < a.title) return 1;
                    return 0;
                }
            }
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            ellipsis: true,
            sorter: {
                compare: (a,b) => {
                    if (a.description < b.description) return -1;
                    if (b.description < a.description) return 1;
                    return 0;
                }
            },
            render: (text) => (
                <p
                    style={{
                        maxWidth: 300,
                        maxHeight: "10em",
                        overflow: "hidden",
                    }}
                >
                    {text}
                </p>
            ),
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
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
            ellipsis: true, 
            sorter: {
                compare: (a, b) => a.duration - b.duration,
            },
        },
        {
            title: "Year",
            dataIndex: "year",
            key: "year",
            ellipsis: true,
            sorter: {
                compare: (a, b) => a.year - b.year,
            },
        },
        {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
            ellipsis: true,
            sorter: {
                compare: (a, b) => a.rating - b.rating,
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
                        <Link to={`/movie-editor/edit/${record.id}`}>
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
            const result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
            setMovies(
                result.data.map(el => {
                    const {id, title, description, duration, genre, image_url, rating, review, year} = el
                    return {id, title, description, duration, genre, image_url, rating, review, year}
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
            let value = movies.filter((el) => {
                return el.title.toLowerCase().includes(search)
            });
            setMovies(value);
        }else{
            axios.get(`https://backendexample.sanbersy.com/api/data-movie`).then((res) => {
                setMovies(res.data)
            });
        }

        setSearch("")
    }

    const handleDelete = (id) => {
        let header = user.token
        axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${id}`,{headers: { Authorization: `Bearer ${header}` }})
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
            <h1>Movie List</h1>
            <Search placeholder="input search text" allowClear value={search} onChange={handleChange} onSearch={(value) => handleSearch(value)} style={{ width: 200 }} />
            <Table scroll={{ x: "max-content" }} columns={columns} dataSource = {movies} />
        </div>
    )

}

export default MovieEditorList;