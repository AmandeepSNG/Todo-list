import { useState } from "react";
import "./App.css";
import TodoWrapper from "./Componenets/TodoWrapper";
import AuthWrapper from "./Componenets/AuthWrapper";

function App () {
  const [showListPage, setShowListPage] = useState(true)
  return (
    <div className="App">
      {
        showListPage ? <TodoWrapper /> : <AuthWrapper />
      }

    </div>
  );
}

export default App;
