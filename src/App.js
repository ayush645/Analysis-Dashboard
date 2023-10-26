import './App.css';
import Navbar from './components/Navbar';
import PopupWindow from './components/PopupWindow';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';
import Update from './components/Update';
import SyllabusAnalysis from "./components/SyllabusAnalysis"
import QuestionAnalysis from "./components/QuestionAnalysis"
import Graph from './components/Graph';
import { useStateContext } from './contextsApi/ContextProvider';

function App() {
  const { open } = useStateContext();
  return (
    <div className='app'>
      {open && <div className='pop'><PopupWindow /></div>}
      <div>
        <Navbar />
        <div className="home">
          <Sidebar />
          <div className="main">
            <p>Skill Test</p>
            <div className="col">
              <div className="row1">
                <Update />
                <Stats />
                <Graph />
              </div>
              <div className="row2">
                <SyllabusAnalysis />
                <QuestionAnalysis />
              </div>

            </div>




          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
