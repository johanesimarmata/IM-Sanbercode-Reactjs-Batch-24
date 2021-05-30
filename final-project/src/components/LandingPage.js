import React, { useState, Component } from 'react'
import {Typography, Card, Row, Col} from "antd"
import axios from 'axios';

const contentStyle = {
    height: '360px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state ={
            movies: [],
            games: []
        }
    }

    componentDidMount(){
        axios.get("https://backendexample.sanbersy.com/api/data-game").then( (res) =>{
            this.setState({games: res.data} )
        })

        axios.get("https://backendexample.sanbersy.com/api/data-movie").then( (res) =>{
            this.setState({movies: res.data} )
        })
    }

    render(){
        const {Meta} = Card
        return(
            <div>
                <Typography.Title>Now Playing in our Cinema: </Typography.Title>
                <div className="site-card-wrapper">
                    <Row gutter={16}>

                    {this.state.movies.map((item, key) => {
                        return(
                            <Col span={8}>
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
                            </Col>
                        )
                    })}
                    </Row>
                </div>
                <Typography.Title>Now Trend in our Gaming House: </Typography.Title>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    {this.state.games.map((item, key) => {
                        return(
                            <Col span={8}>
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
                            </Col>
                        )
                    })}
                    </Row>
                </div>
            </div>
        )
    }
}

export default LandingPage