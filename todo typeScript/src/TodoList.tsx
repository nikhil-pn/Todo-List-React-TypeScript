import React from "react";
import { useDispatch, useTodos, Todo } from "./TodosProvider";

export default function TodoList() {
  const todos = useTodos();
  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li key={todo.id}>
            <TodoElement todo={todo}></TodoElement>
            </li>
      ))}
    </ul>
  );
}

type TodoProp = {
  todo: Todo;
};

function TodoElement({ todo }: TodoProp) {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        name={`${todo.id}-${todo.text}`}
        id={`${todo.id}`}
        checked={todo.done}
        onChange={(e) =>
          dispatch({
            type: "change",
            todo: {
              ...todo,
              done: e.target.checked,
            },
          })
        }
      />
      {todo.text}
      <button
        onClick={() => {
          dispatch({ type: "remove", id: todo.id });
        }}
      >
        X
      </button>
    </>
  );
}
