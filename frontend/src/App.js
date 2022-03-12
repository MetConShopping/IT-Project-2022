
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import StaffLogin from './components/staff/stafflogin';

function App() {
  return (
    <div className="App">
      <Router>
        <StaffLogin />
      </Router>
    </div>
  );
}

export default App;
