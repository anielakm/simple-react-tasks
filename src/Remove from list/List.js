import React, { Component } from 'react';
import Person from './Person'
import Container from '../components/Container'
import Ul from '../components/Ul'
import Text from '../components/Text'

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
        this.setState({ people })

    }
    render() {

        return (<Container>
            <Ul>
                {this.state.people.filter(item => item.isActive).length === 0 && <Text>Lista jest pusta</Text>}
                {this.state.people.filter(item => item.isActive).map((item) => (<li key={item.id} ><Person data={item} handleActive={this.handleActive} /></li>))}

            </Ul>
        </Container>);
    }
}

export default List;