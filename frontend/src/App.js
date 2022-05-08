import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import StaffLogin from './components/staff/Stafflogin';
import LoginScreen from "./components/screens/LoginScreen";
import SocialMedia from "./components/staff/SocialMedia";
import RegisterScreen from "./components/screens/register";
import Header from "./components/staff/stock/Header";
import Home from "./components/staff/stock/Home";

import HeaderMarketing from "./components/staff/marketing/Header";
import MHome from "./components/staff/marketing/MHome";
import AddItem from "./components/staff/marketing/item";
import DisplayItem from "./components/staff/marketing/Displayitem";

import DisplayPromotion from "./components/staff/marketing/Displaypromotion";
import Addpromotion from "./components/staff/marketing/Addpromotion";
import EditPromotion from "./components/staff/marketing/EditPromotion";
import EditItem from "./components/staff/marketing/EditItem";
import PromotionList from "./components/staff/marketing/PromotionList";
import PromoReport from "./components/staff/marketing/PromoReport";
import ItemReport from "./components/staff/marketing/ItemReport";
import ItemList from "./components/staff/marketing/ItemList";

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

import AddCustomer from "./components/staff/customer/AddCustomer";
import DisplayCustomer from "./components/staff/customer/DisplayCustomer";
import CustomerList from "./components/staff/customer/CustomerList";
import CustomerReport from "./components/staff/customer/CustomerReport";
import EditCustomer from "./components/staff/customer/EditCustomer";
import Complaints from "./components/staff/customer/Complaints";
import AllComplaints from "./components/staff/customer/AllComplaints";

import SupplierHeader from "./components/staff/supplier/SupplierHeader";
import SupplierHome from "./components/staff/supplier/SupplierHome";
import AddSupplier from "./components/staff/supplier/AddSupplier";
import DisplaySupplier from "./components/staff/supplier/DisplaySupplier";
import SupplierList from "./components/staff/supplier/SupplierList";
import SupReport from "./components/staff/supplier/SupReport";
import EditSupplier from "./components/staff/supplier/EditSupplier";
import EditInventory from "./components/staff/stock/EditInventory";






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


        <Route path = "/staff-marketing" element={[<HeaderMarketing/> , <MHome />]} /> 
        <Route path = "/add-promotion" element={[<Addpromotion/>]}/>
        <Route path = "/display-promtion" element={[<DisplayPromotion/>]}/>
        <Route path = "/add-item" element={[<AddItem/>]}/>
        <Route path = "/display-item" element={[<DisplayItem/>]}/>
        <Route path = "/edit-promotion" element={[<PromotionList/>]}/>
        <Route path = "/edit/:id" element={[<EditPromotion/>]}/>
        <Route path = "/edit-item/:id" element={[<EditItem/>]}/>
        <Route path="/irepot" element={[<ItemReport/>]}/>
        <Route path = "/view" element={[<ItemList/>]}/>
        <Route path="/report" element={[<PromoReport/>]}/>
        
        

        <Route path = "/add-stock" element={[<AddAssistant/>]}/>
        <Route path = "/addInven-stock" element={[<AddEnventory/>]}/>
        <Route path = "/display-stock" element={[<DisplayAssistant/>]}/>
        <Route path = "/displayInven-stock" element={[<DisplayInventory/>]}/>
        <Route path = "/edit-stock" element={[<AssistantList/>]}/>
        <Route path = "/report-as" element={[<Report/>]}/>
        <Route path = "/view-inventory" element={[<InventoryList/>]}/>
        <Route path = "/irepot-in" element={[<IReport/>]}/>
        <Route path = "/edit-assis/:id" element={[<Edit/>]}/>
        <Route path = "edit-i/:id" element={[<EditInventory/>]}/>
        
        <Route path = "/staff-customer" element={[<HeaderCustomer/> , <HomeCustomer/>]} />
        <Route path = "/add-customer" element={[<AddCustomer/>]}/>
        <Route path = "/display-customer" element={[<DisplayCustomer/>]} />
        <Route path = "/edit-customer" element={[<CustomerList/>]} />
        <Route path = "/EditCustomer" element={[<EditCustomer/>]} />
        <Route path = "/customerreport" element={[<CustomerReport/>]} />
        <Route path = "/editcustomer/:id" element={[<EditCustomer/>]} />
        <Route path = "/Complaints" element={[<Complaints/>]} />
        <Route path = "/AllComplaints" element={[<AllComplaints/>]} />
       
       



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
