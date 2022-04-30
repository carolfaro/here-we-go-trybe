import React, { Component } from 'react'

export default class Body extends Component {
  render() {

    const { allUsers } = this.props;
console.log(allUsers)
    return (
        <div>
        <h3> Nome: <span className='propsColor'> {allUsers.name} </span></h3>
         <h3>Aluna: <span className='propsColor'> {allUsers.id} </span></h3>
         <h3>Você tem: <span className='propsColor'> {allUsers.age} </span></h3>
         <h3>Seu endereço é: <span className='propsColor'> {allUsers.adress} </span></h3>
         </div>
    )
  }
}
