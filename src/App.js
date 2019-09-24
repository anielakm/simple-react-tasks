import React from 'react';
import Nav from './Nav/Nav'
import GlobalStyle from './GlobalStyle'
import Main from './components/Main'
import Hello from './Hello'

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Nav />
      </Main>
    </>
  );
}

export default App;
