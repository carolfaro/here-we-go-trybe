import React from 'react'

class MeuInput extends React.Component {
   

    render() {
        const { value, type, name, onInputChange, text  } = this.props;

        return (
        <section>
                <label htmlFor='email'>
                    {text} 
                    <input 
                    type={ type }
                    name={ name }
                    value={ value } 
                    onChange={ onInputChange  } 
                    />
                </label>
        </section>)

    }
}

export default MeuInput;
