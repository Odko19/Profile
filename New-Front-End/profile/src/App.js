import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="back">
      <Header />
      <main>
        <div className="content">
          <div className="content-header">
            <h1>Hello.... I'm Full stack developer</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="portfolio">portfolio</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="contact">contact</h1>
          </div>
        </div>
        <div className="content">
          <div className="content-header">
            <h1 id="about">about</h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
