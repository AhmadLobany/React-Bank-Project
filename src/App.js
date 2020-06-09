import React, { Component } from 'react';
// import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
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
    return axios.get("http://localhost:4000/transactions")
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
    await axios.post("http://localhost:4000/transaction",{amount,category,vendor})
    const response = await this.getData()
    this.setState({ data: response.data.data})
  }

  withdraw = async (amount,vendor,category) => {
    await axios.post("http://localhost:4000/transaction",{amount : -amount,category,vendor})
    // const data = await this.getData()
    // this.setState ({transCounter: oldTransCount + 1})
    const response = await this.getData()
    this.setState({ data: response.data.data})
  }

  deleteTrans = async (key)  => {
    // const data = this.state.data
    // let index = -1
    // for(let i in data) {
    //   if(data[i]["_id"]===key) {index = i
    //     break;
    //   }
    // }
    // if(index!==-1) {
    // data.splice(index,1)
    // this.setState({data})
    // }
    await axios.delete(`http://localhost:4000/transaction/${key}`)
    const response = await this.getData()
    this.setState({ data: response.data.data})
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
