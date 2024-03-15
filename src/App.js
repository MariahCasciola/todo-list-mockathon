import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["write", "read", "sleep"])
  return (
    <div className="App">
      <header className="App-header">
        <List todos={todos}/>
      </header>
    </div>
  );
}

export default App;
