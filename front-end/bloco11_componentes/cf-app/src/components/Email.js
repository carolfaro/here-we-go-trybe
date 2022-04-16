import React from 'react'

class Email extends React.Component {
   

    render() {
        const { email, onInputChange  } = this.props;

        return (
        <section>
                <label htmlFor='email'>
                    email:
                    <input 
                    type="email"
                    name="email"
                    value={ email } 
                    onChange={ onInputChange  } 
                    />
                </label>
        </section>)

    }
}

export default Email;
