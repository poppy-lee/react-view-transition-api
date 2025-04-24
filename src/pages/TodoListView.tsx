import {
  useDeferredValue,
  unstable_ViewTransition as ViewTransition,
} from "react";
import { useMemo, useState } from "react";

import { Todo } from "../types/Todo";
import { TodoListFooterView } from "./TodoListFooterView";
import { TodoListHeaderView } from "./TodoListHeaderView";
import { TodoListMainView } from "./TodoListMainView";

export const TodoListView = () => {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [todos, setTodos] = useState<Todo[]>([]);

  const visibleTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
      }),
    [filter, todos]
  );

  const deferredVisibleTodos = useDeferredValue(visibleTodos);

  return (
    <ViewTransition>
      <TodoListHeaderView
        onSubmit={(todoTitle) => {
          setTodos((todos) => [
            ...todos,
            { id: Date.now(), title: todoTitle, completed: false },
          ]);
        }}
      />
      <TodoListMainView
        visibleTodos={deferredVisibleTodos}
        toggleAllTodos={() => {
          setTodos((todos) => {
            const completed = !todos.every((todo) => todo.completed);
            return todos.map((todo) => ({ ...todo, completed }));
          });
        }}
        toggleTodo={(todoId) => {
          setTodos((todos) =>
            todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
            )
          );
        }}
        removeTodo={(todoId) => {
          setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
        }}
      />
      <TodoListFooterView
        todos={todos}
        filter={filter}
        onChangeFilter={(filter) => {
          setFilter(filter);
        }}
        removeCompletedTodos={() => {
          setTodos((todos) => todos.filter((todo) => !todo.completed));
        }}
      />
    </ViewTransition>
  );
};
