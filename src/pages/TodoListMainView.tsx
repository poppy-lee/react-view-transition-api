export const TodoListMainView = () => {
  return (
    <main className="main" data-testid="main">
      {/* {visibleTodos.length > 0 ? ( */}
      <div className="toggle-all-container">
        <input
          className="toggle-all"
          type="checkbox"
          id="toggle-all"
          data-testid="toggle-all"
          // checked={visibleTodos.every((todo) => todo.completed)}
          // onChange={toggleAll}
        />
        <label className="toggle-all-label" htmlFor="toggle-all">
          Toggle All Input
        </label>
      </div>
      {/* ) : null} */}
      <ul className="todo-list" data-testid="todo-list">
        {/* {visibleTodos.map((todo, index) => (
            <Item todo={todo} key={todo.id} dispatch={dispatch} index={index} />
          ))} */}

        {/* <Item /> */}
        <li
          // className={ ? classnames({ completed: todo.completed })}
          className="completed"
          data-testid="todo-item"
        >
          <div className="view">
            {/* {true ? (
                <div className="input-container">
                  <input
                    className="new-todo"
                    id="todo-input"
                    type="text"
                    data-testid="text-input"
                    autoFocus
                    placeholder={"What needs to be done?"}
                    // defaultValue={defaultValue}
                    // onBlur={handleBlur}
                    // onKeyDown={handleKeyDown}
                  />
                  <label className="visually-hidden" htmlFor="todo-input">
                    {"New Todo Input"}
                  </label>
                </div>
              ) : ( */}
            <>
              <input
                className="toggle"
                type="checkbox"
                data-testid="todo-item-toggle"
                // checked={completed}
                // onChange={toggleItem}
              />
              <label
                data-testid="todo-item-label"
                // onDoubleClick={handleDoubleClick}
              >
                {/* {title} */}
                {"hello world"}
              </label>
              <button
                className="destroy"
                data-testid="todo-item-button"
                // onClick={removeItem}
              />
            </>
            {/* )} */}
          </div>
        </li>
      </ul>
    </main>
  );
};
