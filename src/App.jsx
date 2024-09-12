import "./App.css";
import Header from "./components/Header";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MyStack from "./components/MyStack";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/mystack" element={<MyStack />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
