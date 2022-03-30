
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import StaffLogin from './components/staff/Stafflogin';
import LoginScreen from "./components/screens/LoginScreen";
import SocialMedia from "./components/staff/SocialMedia";
import RegisterScreen from "./components/screens/register";
import Header from "./components/staff/stock/Header";
import Home from "./components/staff/stock/Home";
import AddAssistant from "./components/staff/stock/AddAssistant";
import AddEnventory from "./components/staff/stock/inventory";
import DisplayAssistant from "./components/staff/stock/DisplayAssistant";
import DisplayInventory from "./components/staff/stock/DisplayInventory";

function App() {
  return (
    <div className="App">
      <Router>
      <SocialMedia />
        
        <Routes>
        <Route path="/" element={<StaffLogin/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path = "/staff-stock" element={[<Header/> , <Home />]} /> 
        <Route path = "/add-stock" element={[<AddAssistant/>]}/>
        <Route path = "/addInven-stock" element={[<AddEnventory/>]}/>
        <Route path = "/display-stock" element={[<DisplayAssistant/>]}/>
        <Route path = "/displayInven-stock" element={[<DisplayInventory/>]}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
