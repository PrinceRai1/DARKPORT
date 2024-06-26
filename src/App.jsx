import "./App.css";
import Header from "./components/Header"
import Heroicsection from "./components/Heroicsection";
import MyStack from "./components/MyStack";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";


function App() {
  return (
  <>
    <Header/>
    <Heroicsection/>
    <AboutMe/>
    <Contact/>
    <MyStack/>
    <Projects/>
  </>
  );
}

export default App;
