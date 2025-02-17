import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
         this.props.allStocks.map( stock => <Stock key={stock.id * Math.random()*10} buyOrSellStock={this.props.buyOrSellStock} stock={stock}/>)
         //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
