import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/models/description")
      .then((res) => res.json())
      .then((res) => setDesc(res));
  }, []);

  return (
    <div className="App back-cover">
      <div className="back-color ">
        <div className="p-3 container minHeight text-white">
          <h1>
            <span className="fontTag">&#60;h1&#62;</span>
            <br />
            {desc.map((title) => {
              return (
                <span className="fontH1">
                  {title.data} <br />
                </span>
              );
            })}

            <span className="fontTag">&#60;h1&#62;</span>
          </h1>
        </div>
      </div>
      {/* {name &&
        name.map((image, i) => {
          return <img key={i} src={`${image.image}`} alt="" />;
        })} */}
    </div>
  );
}

export default App;
