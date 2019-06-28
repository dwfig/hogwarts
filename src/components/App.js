import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogsData from '../porkers_data';
import HogContainer from "./HogContainer"

class App extends Component {
  state = {
    hogs : hogsData,
    greasefilter : false
  }
  toggleFiltered = () => {
    this.setState({greasefilter : !this.state.greasefilter})
  }
  render() {

    let theseHogs = this.state.hogs;

    if (this.state.greasefilter) {
      theseHogs = this.state.hogs.filter(hog => {
        return hog.greased === true
      })
    }

    return (
      <div className="App">
        <Nav toggleFiltered={this.toggleFiltered} />
        <HogContainer hogs={theseHogs} greasefilter={this.state.greasefilter}/>
      </div>
    )
  }
}

export default App;
