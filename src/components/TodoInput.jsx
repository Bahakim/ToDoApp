import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 pb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn add-btn d-flex align-items-center gap-2" type="submit">
          <i className="bi bi-plus-lg"></i> Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
