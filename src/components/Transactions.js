import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
    render() {
        const transactions = this.props.data;
        return (
            <div id="transactions-container">
             {
                    transactions.map ( e => 
                        {return <Transaction deleteTrans={this.props.deleteTrans} id={e.key} key={e.key} amount={e.amount} vendor={e.vendor} category={e.category}/>}
                    )
             }
            </div>
        )
    }
}

export default Transactions;