import React, { Component } from 'react';
import Form from './Form'
import Container from '../components/Container'
import Text from '../components/Text'


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: false, message: null }
    }

    handleCheckbox = (e) => {
        this.setState({ isChecked: e.target.checked })
    }

    handleForm = (e) => {
        e.preventDefault();

        if (this.state.isChecked) {
            this.setState({ message: 'Zakup udany' })
        } else {
            this.setState({ message: 'Musisz mieć ukończone 16 lat aby zakupić bilet na ten film' })
        }
    }



    render() {


        return (<Container>
            <Form handleForm={this.handleForm} handleCheckbox={this.handleCheckbox} checked={this.state.isChecked} />
            <Text >{this.state.message}</Text>
        </Container>);
    }
}

export default Movie;