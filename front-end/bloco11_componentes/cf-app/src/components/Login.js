import React from 'react'

class Login extends React.Component {
    
    render() {
        return (
        <section>
            <h2>Login</h2>
            <form>
                <label htmlFor='email'>
                    email
                    <input name="email" value="" onChange={() => console.log('ta usando o input')} />
                </label>
            </form>
        </section>)

    }
}

export default Login;
