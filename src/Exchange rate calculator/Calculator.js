import React, { Component } from 'react';
import Currency from './Currency'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [{
                id: 1,
                name: 'dolar',
                exRate: 3.9199,
                text: 'Wartość w dolarach',
                symbol: '$'
            },
            {
                id: 2,
                name: 'euro',
                exRate: 4.3372,
                text: 'Wartość w euro',
                symbol: '€',
            },
            {
                id: 3,
                name: 'funt',
                exRate: 4.8960,
                text: 'Wartość w funtach',
                symbol: '£'

            }],
            goods: [
                {
                    name: 'prąd',
                    price: '10',
                    unit: 'kW'
                },
                {
                    name: 'benzyna',
                    price: '4.98',
                    unit: 'l'
                },
                {
                    name: 'pomarańcze',
                    price: '3.99',
                    unit: 'kg'
                },
            ],
            ammount: 0,
            selectedProduct: 'prąd'
        }
    }

    handleChange = (e) => {

        this.setState({ ammount: e.target.value })
    }

    handleSelect = (e) => {
        this.setState({ selectedProduct: e.target.value })
    }

    handleCurrency = (currency) => {
        let price = this.state.goods.filter(item => item.name === this.state.selectedProduct).map(item => item.price);
        let dataCurrency = this.state.currencies.filter(item => item.name === currency)[0].exRate;
        let ammount = this.state.ammount;
        let value = price * dataCurrency * ammount;
        return value;
    }

    render() {
        return (<>
            <h1>Przelicznik walut</h1>
            <label htmlFor="select">Wybierz produkt</label><select name="select" onChange={this.handleSelect}>
                <option value="prąd">Prąd</option>
                <option value="benzyna">Benzyna</option>
                <option value="pomarańcze">Pomarańcze</option>
            </select> <br />
            <label htmlFor="">Wybierz ilość: </label>
            <input type="text" value={this.state.ammount} onChange={this.handleChange} /> {this.state.goods.filter(item => item.name === this.state.selectedProduct)[0].unit} <br />
            Wartość w złotych: {this.state.goods.filter(item => item.name === this.state.selectedProduct).map(item => item.price)} zł <br />

            {this.state.currencies.map((item) => <Currency currency={item} handleCurrency={this.handleCurrency(`${item.name}`)} key={item.id} />)}

        </>);
    }
}

export default Calculator;