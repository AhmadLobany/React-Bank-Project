import React, { Component } from 'react';


class Breakdown extends Component {
    render() {
        const sortedByCategory = this.props.arr;
        return (
            <table id="breakdown-container">
                          <tbody>
                          <tr>
                              <th>Category</th>
                              <th>Amount</th>
                          </tr>
                          </tbody>
             {
                    sortedByCategory.map ( e => 
                    {return <tbody key={e.category+e.amount}><tr ><td>{e.category}</td><td className={e.amount>=0 ? "pos" : "neg"}>{e.amount}</td></tr></tbody>}
                    )
             }
            </table>
          )
    }
}

export default Breakdown;