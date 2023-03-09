import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";
import { TodosProvider } from "./TodosProvider";

function App() {
  return (
    <>
      <TodosProvider>
        <h2>Todos</h2>
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </TodosProvider>
    </>
  );
}

export default App;
