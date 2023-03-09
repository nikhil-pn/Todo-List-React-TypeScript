import React, { Children, createContext, useContext, useReducer } from "react";
import todosReducer from "./todoReducer";
import { Action } from "./todoReducer";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    text: "learn TypScript",
    done: false,
  },
  {
    id: 2,
    text: "bulid todo app",
    done: false,
  },
  {
    id: 3,
    text: "learn js",
    done: true,
  },
];

const TodoContext = createContext<typeof initialTodos | null>(null);
const TodoDispatchContext = createContext<React.Dispatch<Action>>(() => null);

export function TodosProvider({
  children,
}: {
  children: React.ReactElement[];
}) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <>
      <TodoContext.Provider value={todos}>
        {
          <TodoDispatchContext.Provider value={dispatch}>
            {children}
          </TodoDispatchContext.Provider>
        }
      </TodoContext.Provider>
    </>
  );
}

export const useTodos = () => useContext(TodoContext);
export const useDispatch = () => useContext(TodoDispatchContext);
