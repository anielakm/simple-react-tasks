import React, { Component } from 'react';
import data from './data'
import User from './User'

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

        return (<>
            <h1>Lista uzytkownikow:</h1>
            <button onClick={this.handleFilter.bind(this, 'all')}>Wszyscy uzytkownicy</button>
            <button onClick={this.handleFilter.bind(this, 'female')}>Kobiety</button>
            <button onClick={this.handleFilter.bind(this, 'male')}>Mezczyzni</button>

            {this.usersList()}
        </>);
    }
}

export default UsersList;