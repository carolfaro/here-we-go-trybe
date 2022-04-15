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
    }

    handleChange(event){
        console.log(event.target.value)
    }

    render(){
        return(
        <div>
            <div>
                <hr/>
                <h2>Minhas cores</h2>
                <h3>Meu filtro é {this.state.filtro}</h3>
                <input type="text" value="" onChange={(e) => this.handleChange(e)} />
            </div>
            <div>
                <ul>
                    {colors.map((element) => <li key={element.name}>{element.name}</li>)}
                </ul>
            </div>
        </div>
        )
    }
}

export default Cores;