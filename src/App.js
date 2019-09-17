import React from 'react';
import Movie from './Movie/Movie'
import Shop from './Shop/Shop'
import UsersList from './UsersList/UsersList'
import Calculator from './Exchange rate calculator/Calculator'
import Divination from './Divination/Divination'
import List from './Remove from list/List'

function App() {
  return (
    <div>
      <Movie />
      <Shop /> <br />
      <UsersList />
      <br />
      <Calculator /> <br />
      <Divination /> <br />
      <List />
    </div>
  );
}

export default App;
