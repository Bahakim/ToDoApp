import { useState } from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() === '') {
      deleteTodo(todo.id);
    } else {
      editTodo(todo.id, editText.trim());
    }

    setTimeout(() => {
      setIsEditing(false);
    }, 200);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      <div className="d-flex align-items-center">
        {isEditing ? (
          <button className="action-btn btn-save" onClick={handleSave} title="Save">
            <i className="bi bi-check-lg"></i>
          </button>
        ) : (
          <button className="action-btn btn-edit" onClick={handleEdit} title="Edit">
            <i className="bi bi-pencil"></i>
          </button>
        )}
        <button
          className="action-btn btn-delete"
          onClick={() => deleteTodo(todo.id)}
          title="Delete"
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
