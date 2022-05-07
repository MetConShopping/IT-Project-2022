
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
// import AssistantEdite from "./components/staff/stock/EditeAssistant";
import Report from "./components/staff/stock/report";
import InventoryList from "./components/staff/stock/InventoryList";
import IReport from "./components/staff/stock/InvenReport";
import Edit from "./components/staff/stock/EditeAssistant";
import HeaderCustomer from "./components/staff/customer/Header";
import HomeCustomer from "./components/staff/customer/HomeCustomer";
import SupplierHeader from "./components/staff/supplier/SupplierHeader";
import SupplierHome from "./components/staff/supplier/SupplierHome";
import AddSupplier from "./components/staff/supplier/AddSupplier";
import DisplaySupplier from "./components/staff/supplier/DisplaySupplier";
import SupplierList from "./components/staff/supplier/SupplierList";
import SupReport from "./components/staff/supplier/SupReport";
import EditSupplier from "./components/staff/supplier/EditSupplier";




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
        <Route path = "/edit" element={[<Edit/>]}/>
        
        
        <Route path = "/staff-customer" element={[<HeaderCustomer/> , <HomeCustomer/>]} />


        <Route path = "/staff-supplier" element={[<SupplierHeader/> , <SupplierHome/>]} />
        <Route path = "/add-supplier" element={[<AddSupplier/>]} />
        <Route path ="/display-supplier" element={[<DisplaySupplier/>]} />
        <Route path = "/edit-supplier" element={[<SupplierList/>]} />
        <Route path = "/supreport" element={[<SupReport/>]} />
        <Route path = "/EditSupplier/:id" element={[<EditSupplier/>]} />



        
        
        

        


        

        </Routes>
      </Router>
    </div>
  );
}

export default App;
