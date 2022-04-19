import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJoke = this.renderJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    // objeto para receber dados da api => um lugar para ela ficar
    // const requestHeaders = 'fique aqui'
    const requestHeaders = { headers: { accept: 'application/json' } }
    // faz a fetch => 'venha minha filha, já tem um lugar pra vc ficar' => ele retorna uma promisse => 'estou pensando se vou'
    // const requestHeaders = await fetch('venha minha filha', lugar pra vc ficar)
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    // ela diz => 'estou pensando se vou' => promisse
    const requestObject = await requestReturn.json()
    // const requestObjetc = agora que chegou venha em json()
    // const requestObjetc = dados pronstos para uso
    this.setState({
      jokeObj: requestObject
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Esse método será responsável por salvar a piada no array de piadas storedJokes!!
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [ ...storedJokes, jokeObj ]
    }));
    this.fetchJoke();
  }

  renderJoke() {
    return(
    <div>
      <p>{this.state.jokeObj.joke}</p>
      <button type="button" onClick={this.saveJoke}>
        salve bad joke
      </button>
    </div>
    );
  }

  render() {
    const { storedJokes, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{jokeObj ? this.renderJoke() : loadingElement }</p>

      {
        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;

