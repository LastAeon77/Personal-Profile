import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from "./components/navbar"
import Person from "./components/KamInfo"
import { PersonalInfo, Projects } from "./components/Informs"
import ProjectDisplay from "./components/Project"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
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
                <Route path="/projects">
                  <ProjectDisplay />
                </Route>
                <Route path="/">
                  <Person data={PersonalInfo} />
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
