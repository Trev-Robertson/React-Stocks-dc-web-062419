import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    allStocks: [],
    boughtStock: []
  };

  componentDidMount = () => {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          allStocks: res
          
        });
      });
  };

  buyStock = (stock) =>{
    let buy = this.state.boughtStock
    buy.push(stock)
    this.setState({
      boughtStock: buy
    })
  }
  
  sellStock = (stock) =>{
    let buy = this.state.boughtStock
    
    this.setState({
      boughtStock: buy.filter(stock => stock !== stock)
    })
  }
  


  render() {
    return (
      <div>
        <SearchBar />

        <div className="row">
          <div className="col-8">
            <StockContainer allStocks={this.state.allStocks} buyOrSellStock={this.buyStock}/>
          </div>
          <div className="col-4">
            <PortfolioContainer boughtStock={this.state.boughtStock} buyOrSellStock={this.sellStock}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
