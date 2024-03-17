import "./App.css";
import RecycleBin from "./components/RecycleBin";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(["write", "read", "sleep", "eat"]);
  return (
    <div className="container mt-4">
      <List todos={todos} />

      <RecycleBin />
    </div>
  );
}

export default App;
