import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './components/navbar'
import Person from "./components/KamInfo"
// import ProjectDisplay from "./components/Project"
import { db } from './components/firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProjectDisplay from './components/Project'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Resume } from './components/resume'
import {Transcript} from './components/transcript'

function App() {
  const [projects] = useCollectionData(db.collection('Projects'));
  const projectinf = projects ?? projects
  const [PersonInfo] = useCollectionData(db.collection('PersonInfo'));
  const k = PersonInfo ?? PersonInfo
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Bar />
          </nav>
          <header className="bg">
            <div id="wrapper">
              <Switch>
              <Route path="/transcript">
                  <Transcript />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects">
                  <ProjectDisplay data={projectinf} />
                </Route>
                <Route path="/">
                  <Person data={k} />
                </Route>
              </Switch>
            </div>
          </header>
        </div>
      </Router>
    </div>
  );
}

export default App;
