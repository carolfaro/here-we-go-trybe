import React from 'react';

class Filho extends React.Component {
    render() {
        return (
            <h1>Filho ta aqui</h1>
        )
    }
}

class Pai extends React.Component {
 render() {
     console.log(this.props)
     return (
         <div>
             {/* <Filho /> */}
             {/* pode mostrar meu filho */}
             Pai
            {/* mostre o filho desse pai,teste de dna */}
             {this.props.children}
         </div>
     )
 }  
}

class Visualizacao extends React.Component {
    render() {
        return (
            <>
            <Pai nome="Pai">
                <Filho />
            </Pai>
            <hr />
            <Filho />
            </>
        )
    }  
   }
export default Visualizacao;


