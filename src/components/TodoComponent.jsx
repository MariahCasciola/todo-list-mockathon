/**
 *
 * @param {Object} props
 * @param {Object} props.todo - The todo item.
 * @param {string} props.todo.id - todo id.
 * @param {string} props.todo.title - Title of the todo.
 * @param {string} props.todo.content - Content of the todo.
 * @param {boolean} props.todo.isComplete - Completion status of the todo.
 * @param {Function} props.handleEditClick - Function to be called when the edit button is clicked.
 * @param {Function} props.handleCompleteClick - Function to be called when the complete button is clicked.
 */
export function Todo({
  todo,
  handelEditClick,
  handelCompleteClick,
  handleRemoveClick,
}) {
  return (
    <li class="list-group-item d-flex flex-column border rounded p-2 mb-2">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="mb-0 fw-bold">{todo.title}</p>
        <div>
          {!todo.isComplete && (
            <>
              <button
                class="btn btn-secondary btn-sm me-2"
                onClick={() => handelEditClick(todo.id)}
              >
                Edit
              </button>
            </>
          )}
          {todo.isComplete ? (
            <>
              <button
                class="btn btn-danger btn-sm me-2"
                onClick={() => handleRemoveClick(todo.id)}
              >
                Remove
              </button>
            </>
          ) : (
            <>
              <button
                class="btn btn-success btn-sm me-2"
                onClick={() => handelCompleteClick(todo.id)}
              >
                Complete
              </button>
            </>
          )}
        </div>
      </div>
      <p class="mb-0">{todo.content}</p>
    </li>
  );
}
