import logo from './logo.svg';
import './App.css';

const Task = () => {
  return (
    <li>{'Hello, World!'}</li>
  );
}

const ArrayTasks = ['lavar roupa', 'lavar louça', 'ver tv'];
const TaskList = () => {
  return (
    ArrayTasks.map((element) => <li>{element}</li>)
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Task />
        <TaskList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
