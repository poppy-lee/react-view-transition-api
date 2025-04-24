export const TodoListHeaderView = () => {
  return (
    <header className="header" data-testid="header">
      <h1>todos</h1>
      {/* <Input /> */}
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
      </div>
    </header>
  );
};
