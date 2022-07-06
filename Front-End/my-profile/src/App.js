import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/profile/name")
      .then((res) => res.json())
      .then((res) => console.log(res));
    fetch("http://localhost:3001/profile/age")
      .then((res) => res.json())
      .then((res) => console.log(res));
    fetch("http://localhost:3001/profile/major")
      .then((res) => res.json())
      .then((res) => console.log(res));

    fetch("http://localhost:3001/profile/profile")
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
}

export default App;
