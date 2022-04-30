import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {

    const { newProps } = this.props;
    console.log(newProps);
    return (
        <div>
     <h3> Nome: <span className='propsColor'> {newProps.name} </span></h3>
      <h3>Aluna: <span className='propsColor'> {newProps.id} </span></h3>
      <h3>Você tem: <span className='propsColor'> {newProps.age} </span></h3>
      <h3>Seu endereço é: <span className='propsColor'> {newProps.adress} </span></h3>
      </div>
    )
  }
}
