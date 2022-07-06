import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  fetch("http://localhost:3000/profile/name")
    .then((res) => res.json())
    .then((res) => console.log(res));
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}

export default App;
