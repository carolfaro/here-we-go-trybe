import React from 'react'
import logocf from './logocf.png'
import './App.css';
import Login from './components/Login'
import Header from './components/Header';
import Body from './components/Body';

function App() {

  // props simples

  const infoUserCarol = {
    name: 'Carol',
    age: 18,
    adress: 'Av paulista, 326',
    id: 0,
  }

  const infosUsers= [{
    name: 'Carol',
    age: 18,
    adress: 'Av paulista, 326',
    id: 0,
  },
  {
    name: 'Vinicius',
    age: 19,
    adress: 'Alameda Santos, 14',
    id: 1,
  }
];

  return (
    <div className="App">
      <header>
        <img src={ logocf } alt="" srcSet="" />
      </header>
      <main className="main1">
        <Login />
        <br></br>
        <hr></hr>
        <Header newProps={infoUserCarol}/>
        <hr></hr>
        {infosUsers.map(user => (
          <Body allUsers={user} />
        ))}
      </main>
    </div>
  );
}

export default App;
