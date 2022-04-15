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
        // onChange={(e) => this.handleChange(e)}
        // onChange={this.handleChange}
        return(
        <div>
            <div>
                <hr/>
                <h2>Minhas cores</h2>
                <h3>Meu filtro é {this.state.filtro}</h3>
                <input type="text" value={this.state.filtro} 
                onChange={this.handleChange} />
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