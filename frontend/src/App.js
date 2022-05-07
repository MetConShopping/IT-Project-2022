
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
        
        
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
