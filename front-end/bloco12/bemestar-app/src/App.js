
import './App.css';
import React from 'react'
import Time from './components/Time';

class App extends React.Component {
  constructor(){
    super();
    console.log('constructor')
    this.state = {
      timer: false
    };
  }

  componentDidMount(){
    console.log('componentDidMount')
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
  console.log('trocando o timer')
  }

  renderTimer(){
    const { timer } = this.state;
     if(timer) { 
       return (<p>não fez mais que sua obrigação</p>)
      }
      return  (<p>sim vadia</p>)
  }

  render(){
    console.log('render')

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
