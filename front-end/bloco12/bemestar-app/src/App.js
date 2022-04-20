
import './App.css';
import React from 'react'
import Time from './components/Time';

class App extends React.Component {
  constructor(){
    super();
    console.log('constructor pai')
    this.state = {
      timer: false
    };
  }

  componentDidMount(){
    console.log('componentDidMount pai')
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmoun')
  // }

  // changeTimer() {
  //   this.setState({
  //     timer: !this.state.timer
  //   })
  // }

  changeTimer() {
    this.setState((prevState) => ({
      timer: !prevState.timer,
    }))
  console.log('clicou atualizou o state')
  }

  renderTimer(){
    const { timer } = this.state;
     if(timer) { 
       return (<p>não fez mais que sua obrigação</p>)
      }
      return  (<p>sim vadia</p>)
  }

  render(){
    console.log('render pai')

    const { timer } = this.state;

  return (
    <div className="App">
      <header className="App-header">
      alou alou graças a deus
      </header>
      {/* <Time on={timer}/> */}
      
      {/* se timer for true, se timer tiver ON, renderiza o compomente TIME */}
      { timer && <Time on={ timer } /> }
      <button
      type='button'
      onClick={ () => this.changeTimer() }>

        { timer ? <p>não fez mais que sua obrigação</p> : <p>sim vadia</p>}
        { timer && <p>não fez mais que sua obrigação</p>}
        { !timer && <p>sim vadia</p>}

        {this.renderTimer()}

      </button>
    </div>
  )}
}

export default App;
