import React from 'react';
import HomePage from './components/HomePage/homePage.jsx';
import { BrowserRouter as Router,Routes,Route ,Navigate} from 'react-router-dom';
import './App.css';
import About from './components/About/about.jsx';
import Category from './components/Categories/category.jsx';
import Dashboard from './components/CustomerDashboard/Dashboard.jsx';
import Profile from './components/ProviderProfile/profile.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Contactus from './components/ContactUs/contactus.jsx';
import TermsAndCondition from './components/TermsAndCondition.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import AdminDash from './components/Admin/AdminDashboard/admindash.jsx';

import { useUser } from './components/Context/UserContext.jsx'
import { UserProvider } from './components/Context/UserContext.jsx'

import Customerprofile from './components/CustomerProfile/Customerprofile.jsx';

import Homelog from './components/HomeLog/homelog.jsx';
import Admincustomer from './components/Admin/AdminCustomer/Admincustomer.jsx';
import ServiceBooking from './components/ServiceBooking/servicebooking.jsx';
import EditCustomer from './components/Admin/AdminCustomer/Editcustomer.jsx';
import AdminProvider from './components/Admin/AdminProvider/Adminprovider.jsx';

function App() {

  const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/login" replace />;
  };
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Signup/>}></Route>  
            <Route exact path='/login' element={<Login/>}></Route>  
            <Route exact path='/home' element={<HomePage />}></Route>  
            <Route exact path='/about' element={<About/>}></Route>  
            <Route exact path='/category' element={<Category/>}></Route>
            <Route exact path='/customerdashboard' element={<Dashboard/>}></Route>  
            <Route exact path='/providerprofile' element={<Profile/>}></Route>    
            <Route exact path='/serviceregister' element={<ServiceBooking/>}></Route>  
            <Route path='/admindashboard' element={
            <PrivateRoute>
              <AdminDash/>
            </PrivateRoute>}></Route>  
            <Route exact path='/contact' element={<Contactus/>}></Route>  
            <Route exact path='/terms' element={<TermsAndCondition/>}></Route>  
            <Route exact path='/privacy' element={<PrivacyPolicy/>}></Route>  
            <Route exact path='/customerprofile' element={<Customerprofile/>}></Route>  
            <Route path='/admincustomer' element={
            <PrivateRoute>
              <Admincustomer/>
            </PrivateRoute>}></Route>
            <Route path='/adminprovider' element={
            <PrivateRoute>
              <AdminProvider/>
            </PrivateRoute>}></Route>
            <Route path='/editcustomer' element={
            <PrivateRoute>
              <EditCustomer/>
            </PrivateRoute>}></Route>

       
            <Route exact path='/homelog' element={<Homelog/>}></Route>  
          
         
          

          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

