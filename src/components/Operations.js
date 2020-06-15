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
                <input placeholder="Amount" className="in" value={this.state.amount} onChange={this.updateAmount}></input>
                <input placeholder="Vendor" className="in"  value={this.state.vendor} onChange={this.updateVendor}></input>
                <input placeholder="Category" className="in" value={this.state.Category} onChange={this.updateCategory}></input>
                <button onClick={this.deposit} className="button">Deposit</button>
                <button onClick={this.withraw} className="button">Withdraw</button>

            </div>
        )
    }
}

export default withRouter(Operations);