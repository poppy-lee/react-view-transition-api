import { useMemo } from "react";
import { Todo } from "../types/Todo";

const filterOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
] as const;

export const TodoListFooterView = ({
  todos,
  filter,
  onChangeFilter,
  removeCompletedTodos,
}: {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  onChangeFilter: (filter: "all" | "active" | "completed") => void;
  removeCompletedTodos: () => void;
}) => {
  const activieTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  return todos.length ? (
    <footer className="footer" data-testid="footer">
      <span className="todo-count">
        {`${activieTodos.length} ${
          activieTodos.length === 1 ? "item" : "items"
        } left!`}
      </span>
      <ul className="filters" data-testid="footer-navigation">
        {filterOptions.map(({ value, label }) => (
          <li key={value}>
            <a
              className={filter === value ? "selected" : undefined}
              onClick={() => onChangeFilter(value)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="clear-completed"
        disabled={activieTodos.length === todos.length}
        onClick={removeCompletedTodos}
      >
        Clear completed
      </button>
    </footer>
  ) : null;
};
