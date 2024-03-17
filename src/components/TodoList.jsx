import React from "react";
import { Todo } from "./TodoComponent";

/**
 * @typedef {Object} Todo
 * @property {string} id - The unique identifier for the todo item.
 * @property {string} title - The title of the todo item.
 * @property {string} content - The detailed content of the todo item.
 * @property {boolean} isComplete - Indicates whether the todo item has been completed.
 */

/**
 * @component
 * @param {Object} props
 * @param {Todo[]} props.todos - An array of todo items.
 */
export default function TodoList({ todos }) {
  return (
    <div className="mb-4">
      <h1 className="h1 mb-3">To Do List</h1>

      <ul className="list-group list-unstyled">
        {todos.map((todo, index) => (
          <li>
            <Todo key={index} todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
