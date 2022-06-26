import logo from './logo.svg';
import './App.css';
import Todo from "./components/todo";
import AjaxTest from "./components/ajax/AjaxTest";
import Post from "./components/post";
import PostAPI from "./components/postapi";
import UseContextTodo from "./components/useContextTodo";
import ReduxTodos from "./components/reduxTodos";

function App() {
  return (
    <div>
      <ReduxTodos></ReduxTodos>
    </div>
  );
}

export default App;
