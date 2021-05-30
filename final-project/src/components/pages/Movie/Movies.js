import React, {useState, useEffect} from 'react'
import {  Card, Col, Row  } from "antd"
import {Link} from "react-router-dom"
import axios from "axios"

const MoviesComponent = () => {
    const {Meta} = Card
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`).then((response) => {
            setMovies(response.data.map(el => {
                return{
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    year: el.year,
                    duration: el.duration,
                    genre: el.genre,
                    rating: el.rating,
                    review: el.review,
                    image_url: el.image_url
                }
            }))
        })

    }, [movies])

    return(
        <div className="site-card-wrapper">
            <Row gutter={[16,8]}>
            {
                movies.map((item, index) => {
                    return(
                        <Col span={8} key={index}>
                            <Link to = {`/movies/details/${item.id}`}>
                            <Card hoverable
                            style={{ width: 400, border: "0px"}}
                            cover={
                            <img
                                alt={item.title}
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
                            title={item.title}
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

export default MoviesComponent;