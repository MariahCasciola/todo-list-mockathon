import React from "react";
export default function List({ todos }) {
  return (
    <div className="mb-4">
      <h1 className="h1 mb-3">To Do List</h1>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            <input className="form-check-input" type="checkbox" />
            <span>{todo}</span>
            <button
              className="fa fa-times"
              style={{ background: "none", border: "none" }}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
