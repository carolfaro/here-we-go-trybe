import React from 'react'

class Time extends React.Component {
    constructor(){
        super();
        console.log('TIMER constructor')
      }
    
      componentDidMount(){
        console.log('TIMER componentDidMount')
      }
    
     
      render(){
        console.log('TIMER render')
      return (
        <div>
          <p>já estudou hoje?</p>
        </div>
      )}
    }
    

export default Time;
