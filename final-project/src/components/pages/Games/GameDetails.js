import { Col, Image, Row, Tag} from 'antd';
import axios from 'axios';
import React, {Component} from 'react'
import "../Movie/Movie.css"


class GameDetails extends Component{

    constructor(props){
        super(props)
        this.state={
            games: [],
            id: this.props.match.params.idGame
        }
        this.getColor = this.getColor.bind(this)
        this.getCategorySingle = this.getCategory.bind(this)
    }

    async componentDidMount(){
        const response = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${this.state.id}`)
        this.setState({
            games: response.data
        })
        console.log(this.state.games)

    }

    getColor(){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
    }

    getCategory(games){
        if(games.singleplayer){
            if(games.multiplayer){
                return(
                    <div>
                    <Tag color={this.getColor()}>Singleplayer</Tag> 
                    <Tag color={this.getColor()}>Multiplayer</Tag>    
                    </div>
                )
            }else{
                return(
                    <div>
                    <Tag color={this.getColor()}>Singleplayer</Tag> 
                    </div>
                )
            }
        }
        return(
            <div>
            <Tag color={this.getColor()}>Multiplayer</Tag> 
            </div>
        )
    }


    render(){
        const {games} = this.state
        return(
            <>
                <Row style={{paddingTop: 20}}>
                    <Col span={8}>
                        <Image src={games.image_url} width={300} height={380}/>
                    </Col>
                    <Col span={10}>
                        <h1>{games.name} <strong>({games.release})</strong></h1>
                        <hr/>
                        <strong> Platform: </strong>
                        <p>{games.platform}</p>
                        <hr/>
                        <div className='genre'>
                            <span className='genreTitle'>
                            <strong>Genre: </strong>
                            </span>
                            <Tag color={this.getColor()} >{games.genre}</Tag>                           
                        </div>
                        <hr/>
                        <strong>Category: {this.getCategory(games)}</strong>

                    </Col>

                </Row>
            </>
        )
    }
}
export default GameDetails;