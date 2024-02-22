import Enjoy from "./components/enjoy/Enjoy";
import Experience from "./components/experience/Experience";
import Topbar from "./components/topbar/Topbar";
import Achieve from './components/achieve/Achieve'
import Intro from "./components/intro/Intro";
import Meet from './components/meet/Meet'
import Last from "./components/last/Last";
import './App.css'

import './App.css';

function App() {
  return (
      <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Experience/>
        <Enjoy/>
        <Achieve/>
        <Meet/>
        <Last/>
      </div>
    </div>
  );
}

export default App;
