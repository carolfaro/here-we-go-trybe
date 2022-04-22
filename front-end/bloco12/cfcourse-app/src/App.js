import React from 'react';
import Visualizacao from './components/Children';
import Header from './components/Header'

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
      <Visualizacao />

    </div>
  );
}
}

export default App;
