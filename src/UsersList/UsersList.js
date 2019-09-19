import React, { Component } from 'react';
import data from './data'
import User from './User'
import Container from '../components/Container'
import Button from '../components/Button'
import H1 from '../components/H1'

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = { filter: 'all' };
    }

    handleFilter = (filter) => {
        this.setState({ filter })
    }

    usersList = () => {
        let list;
        switch (this.state.filter) {

            case "female":
                return list = data.filter((user) => (user.sex === "female")).map(user => <User data={user} key={user.id} />);
            case "male":
                return list = data.filter((user) => (user.sex === "male")).map(user => <User data={user} key={user.id} />);
            default:
                return list = data.map(user => <User data={user} key={user.id} />);
        }

    }

    render() {

        return (<Container>
            <H1>Lista uzytkownikow:</H1>
            <Button onClick={this.handleFilter.bind(this, 'all')}>Wszyscy uzytkownicy</Button>
            <Button onClick={this.handleFilter.bind(this, 'female')}>Kobiety</Button>
            <Button onClick={this.handleFilter.bind(this, 'male')}>Mezczyzni</Button>

            {this.usersList()}
        </Container>);
    }
}

export default UsersList;