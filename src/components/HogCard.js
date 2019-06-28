import React, { Component } from 'react';

class HogCard extends Component {
  state = {
    isDetails: false
  }
  toggleDetails = () => {
    this.setState({
      isDetails : !this.state.isDetails
    })
    // console.log("clicked!")
  }
  render(){
    // console.log(this.props)
    return(
      <div onClick={this.toggleDetails}>
        {this.state.isDetails ? (
          <div>
          <div>Greased? {this.props.isGreased ? "🐽" : "🐗"}</div>
          <div>Medal: {this.props.medal}</div>
          <div>Weight: {this.props.weight}</div>
          <div>Specialty: {this.props.specialty}</div>
          </div>
      ):(
      <div>
      <img src={require("../hog-imgs/" + this.props.name.toLowerCase().split(" ").join("_") + ".jpg")}></img>
      <div>🐖 {this.props.name}</div>
      </div>)}
    </div>
    )
  }
}

export default HogCard;
