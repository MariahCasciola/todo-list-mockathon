import logo from './logo.svg';
import './App.css';
import RecycleBin from './RecycleBin';

function App() {
  const [todos, setTodos] = useState(["write", "read", "sleep"])
  return (
    <div className="App">
      <header className="App-header">
        <List todos={todos}/>
      </header>
      <RecycleBin/>
    </div>
  );
}

export default App;
