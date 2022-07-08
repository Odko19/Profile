import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";

export default function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/HOME" element={<App />}></Route>
        <Route path="/ABOUT" element={<About />}></Route>
        <Route path="/PROJECT" element={<Project />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
