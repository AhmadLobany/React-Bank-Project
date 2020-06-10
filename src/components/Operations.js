import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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
      if(this.state.amount) {
        this.props.deposit(parseInt(this.state.amount),this.state.vendor,this.state.Category)
        this.props.history.push("/transactions");
      }
    }

    withraw = () => {
      if(this.state.amount) {
        this.props.withdraw(parseInt(this.state.amount),this.state.vendor,this.state.Category)
        this.props.history.push("/transactions");
      }

        
    }

    updateAmount = (event) => {
        this.setState({
          amount:  event.target.value
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

export default withRouter(Operations);