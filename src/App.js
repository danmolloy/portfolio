import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';
import { Welcome } from "./Components/Welcome"

function App() {
  return (
    <div id="App" className="">
      <Welcome />
      <About /> 
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
