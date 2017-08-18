import React, { Component } from 'react';
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pic: 1
    }

  }

  incrementNum() {
    var pic = this.state.pic + 1
    if(pic > 7) {
        this.setState({
          pic: 1
        })  
    } else {
      this.setState({
        pic: pic
      })
    }
  }

  render() {

    return (
      <div className="App">
        <h2>Welcome to Recycling Can Suck My Dick</h2>
        <p>Click the image below!</p>
        <div className="container">
          <a href="#"><img className="logo" src={`/assets/rcsmd_${this.state.pic}.png`} alt="" onClick={() => this.incrementNum()} /></a>
        </div>
        <div className="container">
          <h3>The purpose of the group is to denounce all recycling...ever! It's pointless and doesn't save the environment</h3>
          <h4>For further questions click the envelope below or email the group organizer at D-Bagz@recyclingcansuckmydick.com</h4>
          <h6>he's a real sweetheart ;)</h6>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
