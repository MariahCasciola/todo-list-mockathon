import "./App.css";
import RecycleBin from "./components/RecycleBin";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState({
    doneTodos: [
      {
        id: "5",
        title: "Read a book",
        content: "Finish reading '1984' by George Orwell",
        isComplete: true,
      },
      {
        id: "6",
        title: "Clean the house",
        content:
          "Vacuum the living room, clean the bathrooms, and mop the floors",
        isComplete: true,
      },
      {
        id: "7",
        title: "Plan vacation",
        content: "Book flights, reserve hotel, and research activities",
        isComplete: true,
      },
      {
        id: "8",
        title: "Attend yoga class",
        content: "Remember to bring yoga mat and water bottle",
        isComplete: true,
      },
    ],
    pendingTodos: [
      {
        id: "1",
        title: "Buy groceries",
        content: "Milk, Bread, Eggs, and Butter",
        isComplete: false,
      },
      {
        id: "2",
        title: "Complete homework",
        content: "Math exercises and History essay",
        isComplete: false,
      },
      {
        id: "3",
        title: "Workout",
        content: "30 minutes of cardio and weight lifting",
        isComplete: false,
      },
      {
        id: "4",
        title: "Call Mom",
        content: "Check up on family and weekend plans",
        isComplete: false,
      },
    ],
  });
  return (
    <div className="container mt-4">
      <TodoList todos={todos.pendingTodos} />

      <RecycleBin todos={todos.doneTodos}/>
    </div>
  );
}

export default App;
