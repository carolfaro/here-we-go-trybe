import React from 'react';
import Header from './components/Header'
import Text from './components/Text';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      sidebar: true,
    }
  }

  toogleSideBar = () => {
    this.setState((prevState) => ({
      sidebar: !prevState.sidebar,
    }))
  }

  render() {
    const { sidebar } = this.state;
  return (
    <div className="App">
      <header className="App-header">
      <Header toogleSideBar={this.toogleSideBar} />
      </header>
      <h1> AQUI ESTÁ UMA PÁGINA VINDA DE NÁRNIA</h1>
      {/* <Visualizacao /> */}
    {sidebar && <Text />}
    </div>
  );
}
}

export default App;
