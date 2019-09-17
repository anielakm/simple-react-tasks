import React, { Component } from 'react';
import Form from './Form'

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


        return (<>
            <Form handleForm={this.handleForm} handleCheckbox={this.handleCheckbox} checked={this.state.isChecked} />
            {this.state.message}
        </>);
    }
}

export default Movie;