import React, { Component } from 'react';
import Form from './Form'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = { ammount: 0, maxAmmount: 10, soldAmmount: 0, totalSoldAmmount: 0 }
    }

    handleButton = (e) => {

        if (e.target.id === 'plus') {
            if (this.state.ammount < this.state.maxAmmount) { this.setState({ ammount: this.state.ammount + 1 }) }


        } else if (e.target.id === "minus") {
            if (this.state.ammount > 0) { this.setState({ ammount: this.state.ammount - 1 }) }


        } else if (e.target.id === "buy") {
            this.setState({
                ammount: 0,
                maxAmmount: this.state.maxAmmount - this.state.ammount,
                soldAmmount: this.state.ammount,
                totalSoldAmmount: this.state.totalSoldAmmount + this.state.ammount,
            })

        }

    }

    render() {

        return (<>

            <h1>Twój koszyk:</h1>
            <Form ammountState={this.state} handleButton={this.handleButton} />

        </>
        );

    }
}

export default Shop;