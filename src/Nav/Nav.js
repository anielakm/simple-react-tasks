import React from 'react';
import Movie from '../Movie/Movie'
import Shop from '../Shop/Shop'
import UsersList from '../UsersList/UsersList'
import Calculator from '../Exchange rate calculator/Calculator'
import Divination from '../Divination/Divination'
import List from '../Remove from list/List'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from '../components/Nav'

const Nav = () => {
    return (<>
        <Router>
            <Navigation>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movie">Movie</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/exrate">Exchange&nbsp;Rate&nbsp;Calculator</Link>
                    </li>
                    <li>
                        <Link to="/divination">Divination&nbsp;Draw</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                </ul>
            </Navigation>

            <Route path="/movie" component={Movie} />
            <Route path="/shop" component={Shop} />
            <Route path="/users" component={UsersList} />
            <Route path="/exrate" component={Calculator} />
            <Route path="/divination" component={Divination} />
            <Route path="/list" component={List} />
        </Router>
    </>);
}

export default Nav;