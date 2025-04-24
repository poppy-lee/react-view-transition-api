import { TodoListFooterView } from "./TodoListFooterView";
import { TodoListHeaderView } from "./TodoListHeaderView";
import { TodoListMainView } from "./TodoListMainView";

export const TodoListView = () => {
  return (
    <>
      <TodoListHeaderView />
      <TodoListMainView />
      <TodoListFooterView />
    </>
  );
};
