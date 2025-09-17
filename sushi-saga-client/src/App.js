import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],         // sushis from server
    eatenSushis: [],    
    budget: 100,        
    startIndex: 0       
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({ sushis: data }));
  }

  handleMoreSushi = () => {
    this.setState(prev => ({
      startIndex: prev.startIndex + 4
    }));
  };

  handleEatSushi = (sushi) => {
   
    if (!this.state.eatenSushis.includes(sushi.id) && this.state.budget >= sushi.price) {
      this.setState(prev => ({
        eatenSushis: [...prev.eatenSushis, sushi.id],
        budget: prev.budget - sushi.price
      }));
    }
  };

  render() {
    const { sushis, eatenSushis, budget, startIndex } = this.state;
    const visibleSushis = sushis.slice(startIndex, startIndex + 4);

    return (
      <div className="app">
        <SushiContainer
          sushis={visibleSushis}
          eatenSushis={eatenSushis}
          onEatSushi={this.handleEatSushi}
          onMoreSushi={this.handleMoreSushi}
        />
        <Table eatenSushis={eatenSushis} budget={budget} />
      </div>
    );
  }
}

export default App;
