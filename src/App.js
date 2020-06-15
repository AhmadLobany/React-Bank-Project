import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Breakdown from './components/Breakdown'
import './App.css';
const axios = require('axios');

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      data : []
    }
  }

  async getData() {
    return axios.get("/transactions")
  }

  async componentDidMount() {
    const response = await this.getData()
    this.setState({ data: response.data.data })
  }


  calcuateBalance = () => {
    const data =  this.state.data
    let sum = 0
    for(let trans of data) {
      sum+= trans.amount
    }
    return sum
  }

  deposit =  async (amount,vendor,category) => {
    await axios.post("/transaction",{amount,category,vendor})
    const response = await this.getData()
    await this.setState({ data: response.data.data})
  }

  withdraw = async (amount,vendor,category) => {
    await axios.post("/transaction",{amount : -amount,category,vendor})
    const response = await this.getData()
    await this.setState({ data: response.data.data})
  }

 sortArr = () => {
    let categories = {}
    const sortedByCategory = []
    const arr = this.state.data
    for(let e of arr) {
      if(!categories[e.category]) {categories[e.category] = e.amount
      } else {
        categories[e.category] = categories[e.category] + e.amount
      }
    } 
    for(let category of Object.keys(categories)) {
      sortedByCategory.push({category,amount: categories[category]})
    }
    return sortedByCategory;
  }


  deleteTrans = async (key)  => {
    await axios.delete(`/transaction/${key}`)
    const response = await this.getData()
    this.setState({ data: response.data.data})
  }

  render() {
  return (
    <Router> 
    <div className="App"><div id="home-background"></div><div id="main-links">
    <ul className="nav">
         {<Link to="/" ><li>Operations</li></Link>}
        {<Link to="/transactions" ><li>Transactions</li></Link>}
        {<Link to="/breakdown" ><li >Breakdown</li></Link>}
        <div id="balance">Balance:  <span className={this.calcuateBalance()>=0 ? "pos" : "neg"}>{this.calcuateBalance()} $</span></div>
        </ul>
      </div>
      {<Route path="/" exact render={() => <Operations withdraw={this.withdraw} deposit={this.deposit}/>}/>}
      {<Route path="/transactions" render={() => <Transactions deleteTrans={this.deleteTrans} data={this.state.data}/>}/>}
  {<Route path="/breakdown" render={() =><Breakdown arr={this.sortArr()}/>}/>}
    </div></Router>
  );}

}

export default App;
