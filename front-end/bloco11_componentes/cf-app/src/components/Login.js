import React from 'react'
import Email from './Email'
import MeuInput from './MeuInput'

class Login extends React.Component {
    
    constructor(){
        super()
        this.state ={
            email: '',
            password: '',
            nome: '',
        }
    }

  // escrita do estado
    handleInput = (e) => {
        console.log(this)
        const key = e.target.name;
        const { value } = e.target;
        this.setState({
            [key]: value,
        })
    }


    render() {
        const { email, password, nome } = this.state;

        
        return (
        <section>
            <h2>Login</h2>
            <form>
                <Email 
                // email e onInputChange é uma prop q o pai passa pro filho
                // por isso ela só é exportada lá, pq aqui ela é criada
                email={ email } 
                // this.handleInput leitura => passando a leitura pro filho via prop onInputChange
                onInputChange={ this.handleInput } />
                <MeuInput 
                text={"password:"}
                name="password"
                type="password"
                value={ password }
                onInputChange={ this.handleInput }
                />
                 <MeuInput 
                text={"nome:"}
                name="nome"
                type="text"
                value={ nome }
                onInputChange={ this.handleInput }
                />
            </form>
        </section>)

    }
}

export default Login;
