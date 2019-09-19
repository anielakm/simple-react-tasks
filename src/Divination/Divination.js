import React, { Component } from 'react';
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'
import H1 from '../components/H1'

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
        return (<Container>
            <H1>Wylosuj lub dodaj wrózbę</H1>
            <Input type="text" id="divinationText" placeholder="Treść wrózby ..." /> <br /><Button onClick={this.addDivination}>Dodaj wrózbę</Button>
            <Button onClick={this.drawLots}>Losuj wrózbę</Button> <br />
            {this.state.divination}
        </Container>);
    }
}

export default Divination;