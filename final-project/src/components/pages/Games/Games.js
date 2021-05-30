import React, {useState, useEffect} from 'react'
import {  Card, Col, Row  } from "antd"
import {Link} from "react-router-dom"
import axios from "axios"

const GamesComponent = () => {
    const {Meta} = Card
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game`).then((response) => {
            setGames(response.data.map(el => {
                return{
                    id: el.id,
                    name: el.name,
                    platform: el.platform,
                    release: el.release,
                    genre: el.genre,
                    singlePlayer: el.singlePlayer,
                    multiplayer: el.multiplayer,
                    image_url: el.image_url
                }
            }))
        })

    }, [games])

    return(
        <div className="site-card-wrapper">
            <Row gutter={[16,8]}>
            {
                games.map((item, index) => {
                    return(
                        <Col span={8} key={index}>
                            <Link to = {`/games/details/${item.id}`}>
                            <Card hoverable
                            style={{ width: 400, border: "0px"}}
                            cover={
                            <img
                                alt={item.name}
                                src={item.image_url}
                                style={{borderRadius:
                                    "8px",
                                height:
                                    "370px",
                                objectFit:
                                    "cover",}}
                            />
                            }>
                            <Meta
                            title={item.name}
                            description={item.genre}
                            />
                            </Card>
                            </Link>
                        </Col>
                    )
                })
            }
            </Row>
        </div>
    )
}

export default GamesComponent;