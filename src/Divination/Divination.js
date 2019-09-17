import React, { Component } from 'react';

class Divination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            divination: '',
            divinations: [
                {
                    id: 1,
                    message: 'Wrózba 1'
                },
                {
                    id: 2,
                    message: 'Wrozba 2'
                },
                {
                    id: 3,
                    message: 'Wrozba 3'
                },

            ]
        }
    }

    addDivination = () => {
        let id = this.state.divinations.length + 1;
        let message = document.querySelector("#divinationText").value;
        let divinations = this.state.divinations;
        divinations.push({ id, message })
        this.setState({ divinations })
    }


    drawLots = () => {

        let x = Math.floor(Math.random() * this.state.divinations.length);
        this.setState({ divination: this.state.divinations[x].message });

    }

    render() {
        return (<>
            <h1>Wylosuj lub dodaj wrózbe</h1>
            <input type="text" id="divinationText" /> <button onClick={this.addDivination}>Dodaj wrózbę</button>
            <button onClick={this.drawLots}>Losuj wrózbę</button> <br />
            {this.state.divination}
        </>);
    }
}

export default Divination;