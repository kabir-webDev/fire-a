import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./component/Todo";
import MyTodo from "./component/MyTodo";

function App() {
  return (
    <div className="App">
      {/* <Todo/> This is basically a tried project to see the effect of git */}
      <MyTodo />
    </div>
  );
}

export default App;
