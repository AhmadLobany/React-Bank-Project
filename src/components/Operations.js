import React, { Component } from 'react';

class Operations extends Component {

    constructor() {
        super()
        this.state ={
            amount: "",
            vendor: "",
            Category: ""
        }
    }

    deposit = () => {
        this.props.deposit(this.state.amount,this.state.vendor,this.state.Category)
    }

    withraw = () => {
        this.props.withdraw(this.state.amount,this.state.vendor,this.state.Category)
    }

    updateAmount = (event) => {
        this.setState({
          amount:  parseInt(event.target.value)
        })
      }

      updateVendor = (event) => {
        this.setState({
          vendor: event.target.value
        })
      }

      updateCategory = (event) => {
        this.setState({
          Category: event.target.value
        })
      }

    render() {
        return (
            <div id="Operations-container">
                <input placeholder="Amount" value={this.state.amount} onChange={this.updateAmount}></input>
                <input placeholder="Vendor" value={this.state.vendor} onChange={this.updateVendor}></input>
                <input placeholder="Category" value={this.state.Category} onChange={this.updateCategory}></input>
                <button onClick={this.deposit}>Deposit</button>
                <button onClick={this.withraw}>Withdraw</button>
            </div>
        )
    }
}

export default Operations;