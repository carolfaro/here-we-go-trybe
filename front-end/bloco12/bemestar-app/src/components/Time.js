import React from 'react'

class Time extends React.Component {
    constructor(){
        super();
        console.log('constructor filho')
        this.state = {
          count: 0,
          momento: 0,
        }
      }
    
      componentDidMount(){
        console.log('componentDidMount filho')

        this.interval = setInterval(() => {
          console.log('interval')
          this.setState((prevState) => ({
            count: prevState.count + 1,
          }))

        }, 1000);

      }
      
      componentWillUnmount() {
        console.log('e morreu')
        // desligar interval
        clearInterval(this.interval)
      }

      renderMomento() {
       const { count, momento } = this.state;
       const momentosExercios = ['inspire minha filha', 'segure', 'expire']
       if(count < 2) {
          return (<h1>{momentosExercios[momento]}</h1>)
       }
          this.setState({
          count: 0,
          momento: momentosExercios.length - 1 === momento 
          ? 0 : momento + 1,
          });
      }
     
      render(){
        const { count } = this.state;
        console.log('render filho')
      return (
        <div>
          <p>já estudou hoje?</p>
          <p>{this.renderMomento()}</p>
          <p>{count}</p>
        </div>
      )}
    }
    

export default Time;
