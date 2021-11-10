import './App.css';
import { About } from './Components/About';
import { Footer } from './Components/Footer';
import { Projects } from './Components/Projects';
import { Welcome } from "./Components/Welcome"

function App() {
  return (
    <div id="App" className="">
      <Welcome />
      <About /> 
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
