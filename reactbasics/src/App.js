import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import NewComponent from "./components/NewComponent";
import NewClassComponent from "./components/NewClassComponent";
import ParentComponent from "./components/PropComponent";
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/new">New Component</Link>
              <br />
              <Link to="/class">New Class Component</Link>
              <br />
              <Link to="/prop">New Prop Component</Link>
            </li>
          </ul>
        </nav>
        <h1> Hello Isocrates</h1>
      </div>
      <Routes>
        {/* Navigate to the defined component */}
        <Route path="/new" element={<NewComponent />}></Route>
        {/* Navigate to the root url */}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/class" element={<NewClassComponent />} />
        <Route path="/prop" element={<ParentComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
