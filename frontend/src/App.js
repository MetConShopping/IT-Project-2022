
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
import AssistantList from "./components/staff/stock/List";
import Report from "./components/staff/stock/report";
import InventoryList from "./components/staff/stock/InventoryList";
import IReport from "./components/staff/stock/InvenReport";
import Edit from "./components/staff/stock/EditeAssistant";
import HeaderCustomer from "./components/staff/customer/Header";
import HomeCustomer from "./components/staff/customer/HomeCustomer";




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
        <Route path = "/edit-stock" element={[<AssistantList/>]}/>
        <Route path = "/report" element={[<Report/>]}/>
        <Route path = "/view" element={[<InventoryList/>]}/>
        <Route path = "/irepot" element={[<IReport/>]}/>
        <Route path = "/edit/:id" element={[<Edit/>]}/>
        
        
        <Route path = "/staff-customer" element={[<HeaderCustomer/> , <HomeCustomer/>]} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
