import { Col, Image, Row, Progress, Tag} from 'antd';
import axios from 'axios';
import React, {Component} from 'react'
import "./Movie.css"


class MovieDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            movies: [],
            id: this.props.match.params.idMovie
        }
        this.getColor = this.getColor.bind(this)
    }

    async componentDidMount(){
        const response = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${this.state.id}`)
        this.setState({
            movies: response.data
        })
        console.log(this.state.movies)

    }

    getColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }


    render(){
        const {movies} = this.state
        return(
            <>
                <Row style={{paddingTop: 20}}>
                    <Col span={8}>
                        <Image src={movies.image_url} width={300} height={380}/>
                    </Col>
                    <Col span={10}>
                        <h1><strong>{movies.title} ({movies.year})</strong> : {movies.duration} minutes</h1>
                        <hr/>
                        <strong> Description: </strong>
                        <p>{movies.description}</p>
                        <hr/>
                        <div className='genre'>
                            <span className='genreTitle'>
                            <strong>Genre: </strong>
                            </span>
                            <Tag color={this.getColor()} >{movies.genre}</Tag>                           

                        </div>
                        <hr/>
                        <strong>Rating User:</strong>
                        <Progress
                        type="circle"
                        className="progress"
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={movies.rating * 10}
                        />
                        <hr/>
                        <strong>Review User:</strong>
                        <p>{movies.review}</p>

                    </Col>

                </Row>
            </>
        )
    }
}
export default MovieDetails;