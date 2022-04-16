import React from 'react'
import logocf from './logocf.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={ logocf } alt="" srcSet="" />
      </header>
      <main className="main1">
        <section>Login</section>
        <section>Cadastro</section>
      </main>
    </div>
  );
}

export default App;
