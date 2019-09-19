import React from 'react';
import Nav from './Nav/Nav'
import GlobalStyle from './GlobalStyle'
import Main from './components/Main'
import Container from './components/Container'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Movie from './Movie/Movie'
import Shop from './Shop/Shop'
import Users from './UsersList/UsersList'
import Calculator from './Exchange rate calculator/Calculator'
import Divination from './Divination/Divination'
import List from

  function App() {
    return (
      <>
        <Router>
          <GlobalStyle />
          <Main><Nav />
            <Container>Witaj na stronie, wybierz z menu jedną z 6-ciu prostych aplikacji napisanych w React:
<ul>
                <li>
                  <Link to='/movie'>Movie</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
                <li>
                  <Link to='users'>Users</Link>
                </li>
                <li>
                  <Link to='/exrate'>Exchange Rate Calculator</Link>
                </li>
                <li>
                  <Link to='/divination'>Divination Draw</Link>
                </li>
                <li>
                  <Link to='/list'>List</Link>
                </li>
              </ul>
            </Container>

          </Main>
          <Route path="/movie" component={Movie} />
          <Route path="/shop" component={Shop} />
          <Route path="/users" component={Users} />
          <Route path="/exrate" component={Movie} />
          <Route path="/movie" component={Movie} />
        </Router>
      </>
    );
  }

export default App;
