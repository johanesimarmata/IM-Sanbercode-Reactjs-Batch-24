import React, {Component} from 'react'


class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      text: null,
      showTime: true
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(){
    if(this.state.time === 0 && this.state.showTime === true){
      this.componentWillUnmount();
      this.setState({showTime: !this.state.showTime})
    }
  }

   componentWillUnmount(){
     clearInterval(this.timerID);
   }


  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }

  render(){
    if(this.state.showTime){
      return(
        <div style={{textAlign: "center"}}>
          <h1 style={{float: "left", margin: "20px", display: "inline-block"}}>Sekarang jam - {new Date().toLocaleTimeString()}.</h1>
          <h1 style={{float: "right", margin: "20px", display: "inline-block"}}>hitung Mundur: {this.state.time}</h1>
  
        </div>
      )
    }else{
      return(
        <></>
      )
    }
  }



}

export default Timer;