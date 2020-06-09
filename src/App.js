import React, { Component } from 'react';
// import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data : [
        { amount: 3200, vendor: "Elevation", category: "Salary", key: 1 },
        { amount: -7, vendor: "Runescape", category: "Entertainment", key: 2 },
        { amount: -20, vendor: "Subway", category: "Food",key: 3 },
        { amount: -98, vendor: "La Baguetterie", category: "Food",key: 4 }
      ], 
      transCounter : 4
    }
  }

  calcuateBalance = () => {
    let sum = 0
    for(let trans of this.state.data) {
      sum+= trans.amount
    }
    return sum
  }

  deposit = (amount,vendor,category) => {
    const oldTransCounet = this.state.transCounter
    const data = this.state.data
    data.push({amount,vendor,category,key: oldTransCounet + 1})
    this.setState ({data,transCounter: oldTransCounet + 1})
  }

  withdraw = (amount,vendor,category) => {
    const oldTransCounet = this.state.transCounter
    const data = this.state.data
    data.push({amount: -amount,vendor,category,key: oldTransCounet + 1})
    this.setState ({data,transCounter:oldTransCounet + 1})
  }

  deleteTrans = (key)  => {
    const data = this.state.data
    let index = -1
    for(let i in data) {
      if(data[i].key===key) {index = i
        break;
      }
    }
    if(index!==-1) {
    data.splice(index,1)
    this.setState({data})
    }
  }

  render() {
  return (
    <div className="App">
      <div>Balance:  {this.calcuateBalance()}$</div>
      <Operations withdraw={this.withdraw} deposit={this.deposit}/>
      <Transactions deleteTrans={this.deleteTrans} data={this.state.data}/>
    </div>
  );}

}

export default App;
