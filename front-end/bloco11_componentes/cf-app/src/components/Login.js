import React from 'react'

class Login extends React.Component {
    
    constructor(){
        super()
        this.state ={
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleChange(e){
        const { value } = e.target;
        this.setState({
            email: value,
        })

    }

    handlePassword(e){
        const { value } = e.target;
        this.setState({
            password: value,
        })
    }

    render() {
        const { email, password } = this.state;

        return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor='email'>
                    email 
                    <input 
                    type="email"
                    name="email"
                    value={ email} 
                    onChange={ this.handleChange } />
                </label>
                <p></p>
                <label htmlFor='password'>
                    senha
                    <input 
                    name="password"
                    type="password"
                    value={ password } 
                    onChange={ this.handlePassword } />
                </label>
            </form>
        </section>)

    }
}

export default Login;
