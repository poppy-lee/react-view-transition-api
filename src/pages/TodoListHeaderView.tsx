export const TodoListHeaderView = ({
  onSubmit,
}: {
  onSubmit: (todoTitle: string) => void;
}) => {
  return (
    <header className="header" data-testid="header">
      <h1>todos</h1>
      <div className="input-container">
        <input
          className="new-todo"
          id="todo-input"
          type="text"
          data-testid="text-input"
          autoFocus
          placeholder="What needs to be done?"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              const todoTitle = event.currentTarget.value.trim();
              if (!todoTitle) return;
              onSubmit(todoTitle);
              event.currentTarget.value = "";
            }
          }}
        />
      </div>
    </header>
  );
};
