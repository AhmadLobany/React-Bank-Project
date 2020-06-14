import React, { Component } from 'react';


class Transaction extends Component {

    deleteTrans = () =>  {
        this.props.deleteTrans(this.props.id);
    }

    render() {
        return (
            <tbody>
            <tr id="transaction-container">
                <td  className={this.props.amount>=0 ? "pos" : "neg"}> {this.props.amount} </td>  
                <td>{this.props.vendor} </td>
                <td>{this.props.category}</td>
                <td><button onClick={this.deleteTrans}>Delete</button></td>
            </tr>
            </tbody>
        )
    }
}

export default Transaction;