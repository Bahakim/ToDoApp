const TodoFilter = ({ currentFilter, setFilter, count }) => {
  return (
    <div className="filters-container">
      <span className="todo-stats">
        {count} task{count !== 1 ? 's' : ''} left
      </span>
      <div className="d-flex gap-2">
        <button
          className={`btn filter-btn ${currentFilter === 'All' ? 'active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <button
          className={`btn filter-btn ${currentFilter === 'Active' ? 'active' : ''}`}
          onClick={() => setFilter('Active')}
        >
          Active
        </button>
        <button
          className={`btn filter-btn ${currentFilter === 'Completed' ? 'active' : ''}`}
          onClick={() => setFilter('Completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
