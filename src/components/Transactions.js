import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    render() {
        const transactions = this.props.data;
        return (
                <table id="transactions-container">
                    <tbody>
                    <tr>
                        <th>Amount</th>
                        <th>Vendor</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                    </tbody>

             {
                    transactions.map ( e => 
                        {return <Transaction deleteTrans={this.props.deleteTrans} id={e["_id"]} key={e["_id"]} amount={e.amount} vendor={e.vendor} category={e.category}/>}
                    )
             }
                </table>
        )
    }
}

export default Transactions;