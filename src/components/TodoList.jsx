import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <i className="bi bi-clipboard-check"></i>
        <h3>No tasks yet</h3>
        <p>Add a task above to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
