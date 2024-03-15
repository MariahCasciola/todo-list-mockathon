import "./App.css";
import RecycleBin from "./components/RecycleBin";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(["write", "read", "sleep", "eat"]);
  return (
    <div className="App-header">
      <header>
        <List todos={todos} />
      </header>
      <RecycleBin />
    </div>
  );
}

export default App;
