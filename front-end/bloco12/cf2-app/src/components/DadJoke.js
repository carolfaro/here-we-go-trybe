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
    this.setState(
    { loading: true }, 
    async () => { 
    const requestHeaders = { headers: { accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json()
    this.setState({
      loading: false,
      jokeObj: requestObject
    })
  })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
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
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{loading ? loadingElement : this.renderJoke()}</p>
      </div>
    );
  }
}

export default DadJoke;
