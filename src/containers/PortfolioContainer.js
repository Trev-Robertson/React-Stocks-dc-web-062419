import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.boughtStock.map( stock => <Stock key={stock.id * Math.random()*10} buyOrSellStock={this.props.buyOrSellStock} stock={stock}/>)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
