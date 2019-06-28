import React, { Component } from 'react';
import HogCard from "./HogCard.js"

class HogContainer extends Component {
  generateHogCards =  () => this.props.hogs.map((hog) => <HogCard key={hog.name} name={hog.name} isGreased={hog.greased} specialty={hog.specialty} medal={hog['highest medal achieved']} weight={hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}/>)
  render () {
    return(
      <div>
      {this.generateHogCards()}
      </div>
    )
  }
}

export default HogContainer;
