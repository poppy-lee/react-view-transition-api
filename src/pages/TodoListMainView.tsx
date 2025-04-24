import { Todo } from "../types/Todo";

export const TodoListMainView = ({
  visibleTodos,
  toggleAllTodos,
  toggleTodo,
  removeTodo,
}: {
  visibleTodos: Todo[];
  toggleAllTodos: () => void;
  toggleTodo: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
}) => {
  return (
    <main className="main" data-testid="main">
      {0 < visibleTodos.length && (
        <div className="toggle-all-container">
          <input
            className="toggle-all"
            type="checkbox"
            id="toggle-all"
            data-testid="toggle-all"
            checked={visibleTodos.every((todo) => todo.completed)}
            onChange={() => toggleAllTodos()}
          />
          <label className="toggle-all-label" htmlFor="toggle-all">
            Toggle All Input
          </label>
        </div>
      )}
      <ul className="todo-list" data-testid="todo-list">
        {visibleTodos.map(({ id, title, completed }) => (
          <li
            key={id}
            className={completed ? "completed" : undefined}
            data-testid="todo-item"
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                data-testid="todo-item-toggle"
                checked={completed}
                onChange={() => toggleTodo(id)}
              />
              <label data-testid="todo-item-label">{title}</label>
              <button
                className="destroy"
                data-testid="todo-item-button"
                onClick={() => removeTodo(id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
