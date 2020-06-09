import React, { Component } from 'react';


class Transaction extends Component {

    deleteTrans = () =>  {
        this.props.deleteTrans(this.props.id);
    }

    render() {
        return (
            <div id="transaction-container">
                <span> {this.props.amount} </span>  
                <span>{this.props.vendor} </span>
                <span>{this.props.category}</span>
                <button onClick={this.deleteTrans}>Delete</button>
            </div>
        )
    }
}

export default Transaction;