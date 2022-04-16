import React from 'react'

class Login extends React.Component {
    
    constructor(){
        super()
        this.state ={
            email: 'oi?',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const { value } = e.target;
        this.setState({
            email: value,
        })

    }

    render() {
        const { email } = this.state;

        return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor='email'>
                    email 
                    <input name={ email} value="" onChange={ this.handleChange } />
                </label>
            </form>
        </section>)

    }
}

export default Login;
