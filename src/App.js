import logo from "./logo.svg";
import "./App.css";
import RecycleBin from "./RecycleBin";
import { useState } from "react";
import List from "./components/List/List";
import AddTask from "./components/List/AddTask";

function App() {
  const [todos, setTodos] = useState(["write", "read", "sleep", "eat"]);
  return (
    <div className="App">
      <header className="App-header">
        <List todos={todos} />
        <AddTask />
      </header>
      <RecycleBin />
    </div>
  );
}

export default App;
