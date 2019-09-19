import React from 'react';
import Nav from './Nav/Nav'
import GlobalStyle from './GlobalStyle'
import Main from './components/Main'
import Container from './components/Container'
import Movie from './Movie/Movie'
import Shop from './Shop/Shop'
import Users from './UsersList/UsersList'
import Calculator from './Exchange rate calculator/Calculator'
import Divination from './Divination/Divination'
import List from './UsersList/UsersList'
import Ul from './components/Ul'

function App() {
  return (
    <>

      <GlobalStyle />
      <Main><Nav />
        <Container>Witaj na stronie, wybierz z menu jedną z 6-ciu prostych aplikacji napisanych w React. <br /><br />

        </Container>

      </Main>


    </>
  );
}

export default App;
