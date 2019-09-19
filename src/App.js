import React from 'react';
import Nav from './Nav/Nav'
import GlobalStyle from './GlobalStyle'
import Main from './components/Main'
import Container from './components/Container'


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
