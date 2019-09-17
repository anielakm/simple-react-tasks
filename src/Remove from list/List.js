import React, { Component } from 'react';
import Person from './Person'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: [{
                id: 1,
                name: 'Jan',
                lastName: 'Kowalski',
                isActive: true
            },
            {
                id: 2,
                name: 'Janina',
                lastName: 'Kowalska',
                isActive: true
            },
            {
                id: 3,
                name: 'Marcin',
                lastName: 'Kwiat',
                isActive: true
            },
            {
                id: 4,
                name: 'Anna',
                lastName: 'Kwiat',
                isActive: true
            }]
        }
    }

    handleActive = (id) => {


        let people = [...this.state.people];
        people.filter(item => item.id == id)[0].isActive = false;
        console.log(people);
        this.setState({ people })

    }
    render() {

        return (<>
            <ul>

                {this.state.people.filter(item => item.isActive).map((item) => (<li key={item.id} ><Person data={item} handleActive={this.handleActive} /></li>))}

            </ul>
        </>);
    }
}

export default List;