import React, { Component } from 'react';
import Form from './Form'

class Test1 extends Component {
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
            {/* <form onSubmit={this.handleForm}>
                <h1>Kup bilet na horror roku!</h1>
                <input id="age" type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckbox} />
                <label htmlFor="age" > Mam ukończone 16 lat</label><br />
                <button>kup bilet</button>
            </form> */}
            {this.state.message}
        </>);
    }
}

export default Test1;