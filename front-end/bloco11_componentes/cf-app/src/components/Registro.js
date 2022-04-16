import React from 'react'

class Registro extends React.Component {
    
    constructor(){
        super()
        this.state ={
            email: '',
            password: '',
        }
        // this.handleEmail = this.handleEmail.bind(this)
        // this.handlePassword = this.handlePassword.bind(this)

        // this.handleInput = this.handleInput.bind(this)
    }

    // handleEmail(e){
    //     const key = 'email';
    //     const { value } = e.target;
    //     this.setState({
    //         [key]: value,
    //     })

    // }

    // handlePassword(e){
    //     const { value } = e.target;
    //     this.setState({
    //         password: value,
    //     })
    // }

    // handleInput(e){
    //     console.log(this)
    //     const key = e.target.name;
    //     const { value } = e.target;
    //     this.setState({
    //         [key]: value,
    //     })
    // }

    // abaixo fazendo uma arrow function não precisamos do bind
    // pq a arrow function copia o this
    handleInput = (e) => {
        console.log(this)
        const key = e.target.name;
        const { value } = e.target;
        this.setState({
            [key]: value,
        })
    }

    // tudo declarado acima do RENDER() vira uma propriedade da classe

    render() {
        const { email, password } = this.state;

        return (
        <section>
            <h2>Registro</h2>
            <form>
                <label htmlFor='email'>
                    email 
                    <input 
                    type="email"
                    name="email"
                    value={ email} 
                    // onChange={ (e) => this.handleInput(e) }
                    onChange={ this.handleInput } />
                </label>
                <p></p>
                <label htmlFor='password'>
                    senha
                    <input 
                    name="password"
                    type="password"
                    value={ password } 
                    // onChange={ (e) => this.handleInput(e) }
                    onChange={ this.handleInput } />
                </label>
            </form>
        </section>)

    }
}

export default Registro;
