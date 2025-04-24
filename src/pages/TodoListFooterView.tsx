export const TodoListFooterView = () => {
  return (
    <footer className="footer" data-testid="footer">
      <span className="todo-count">
        {/* {`${activeTodos.length} ${activeTodos.length === 1 ? "item" : "items"} left!`} */}
        10 items left!
      </span>
      <ul className="filters" data-testid="footer-navigation">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a className="" href="#/active">
            Active
          </a>
        </li>
        <li>
          <a className="" href="#/completed">
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        // disabled={activeTodos.length === todos.length}
        // onClick={removeCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
