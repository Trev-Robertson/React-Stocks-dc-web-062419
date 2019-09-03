import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

const URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {
  state = {
    allStocks: [],
    boughtStock: [], 
    filterState: ""
   
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

  buyStock = (event, stock) =>{
  
    let buy = this.state.boughtStock
    buy.push(stock)
    this.setState({
      boughtStock: buy
    })
  }
  
  sellStock = (event, stock, index) =>{
   
    let buy = this.state.boughtStock
    buy.splice(index, 1)

    
    this.setState({
      
      boughtStock: buy
    })
  }

  // list.sort((a, b) => (a.color > b.color) ? 1 : -1)
  
  sort = (event) =>{
    if(event.target.value === 'Alphabetically'){
      this.setState({
        allStocks: this.state.allStocks.sort((a, b) => (a.name > b.name) ? 1 : -1),
        boughtStock: this.state.boughtStock.sort((a, b) => (a.name > b.name) ? 1 : -1)
      })
    }
    else{
      this.setState({
        allStocks: this.state.allStocks.sort((a, b) => (a.price > b.price) ? 1 : -1),
        boughtStock: this.state.boughtStock.sort((a, b) => (a.price > b.price) ? 1 : -1)
      })
    }
    
  }

  filter = (event) => {
    this.setState({
      filterState: event.target.value})
  }



arrayToSend = () => {
  // debugger
  switch(this.state.filterState){
    case 'Tech':
    return this.state.allStocks.filter(stock => stock.type === 'Tech')
    case 'Finance':
    return this.state.allStocks.filter(stock => stock.type === 'Finance')
    case 'Sportswear':
    return this.state.allStocks.filter(stock => stock.type === 'Sportswear')
    default: 
    return this.state.allStocks
  }
}



  render() {
    return (
      <div>
        <SearchBar sort={this.sort} filter={this.filter}/>

        <div className="row">
          <div className="col-8">
            <StockContainer allStocks={this.arrayToSend()} buyOrSellStock={this.buyStock}/>
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
