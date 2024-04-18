import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/create">Add Employee</Link>
            </li>
          </ul>
        </nav>
        <h1> Hello Isocrates</h1>
      </div>
      <Routes>
        {/* Navigate to the defined component */}
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/create" element={<CreateEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
