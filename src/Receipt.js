import React, { Component } from 'react';

class Receipt extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>{this.props.receipt1.person}</h2>
                    <h3>Main: {this.props.receipt1.order.main}</h3>
                    <h3>Protein: {this.props.receipt1.order.protein}</h3>
                    <h3>Rice: {this.props.receipt1.order.rice}</h3>
                    <h3>Sauce: {this.props.receipt1.order.sauce}</h3>
                    <h3>Drink: {this.props.receipt1.order.drink}</h3>
                    <h3>Cost: {this.props.receipt1.order.cost}</h3> 
                </div>
               






            </div>
        );
    }
}

export default Receipt;