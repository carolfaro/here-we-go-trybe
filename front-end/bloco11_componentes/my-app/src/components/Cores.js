import React from 'react';
import './Cores.css'
import colors from '../colors'

class Cores extends React.Component {
    // OU 
    // state = {filtro: 'xxx'}
    // fora do constructor
    
    constructor(props){
        super(props)
        this.state = {filtro: 'xxx'}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(this)
        this.setState({
            filtro: event.target.value
        })
    }

    render(){
        // onChange={(e) => this.handleChange(e)} -> sem o bind
        // onChange={this.handleChange} -> com o bind

        // filter e map
        // map coloca as cores nas lis
        // o filter faz uma verificação: 
        // se o estado do filtro for string vazia (estado do filtro = valor input) mostra todos os elementos
        // ou se tiver alguma coisa, vc filtra tudo q tem aquela coisa dentro do estado do filtro

        return(
        <div>
            <div>
                <hr/>
                <h2 className="titulo">Minhas cores</h2>
                <h3>Meu filtro é {this.state.filtro}</h3>
                <input type="text" value={this.state.filtro} 
                onChange={this.handleChange} />
            </div>
            <div id="container1">
                    {colors
                    .filter((ele) => this.state.filtro === '' || ele.name.includes(this.state.filtro))
                    .map((element) => <span id={element.name}key={element.name}>{element.name}</span>)}
            </div>
        </div>
        )
    }
}

export default Cores;