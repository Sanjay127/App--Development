
import React from 'react'

import Dashboard from './components/Dashboard.jsx';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';  
import TermsAndCondition from './components/TermsAndCondition.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Sidebar from './components/Sidebar.jsx';
import Home from "./components/Home.jsx";
import Service from './components/Service/service.jsx';
import ServiceProvider from "./components/ServiceProvider/serviceprovider.jsx";
import ServiceRequester from "./components/ServiceRequester/serviceRequester.jsx"
import Payment from './components/Payment/payment.jsx';
import Categories from './components/Categories/category.jsx';
import Review from './components/Review/review.jsx';
import WelcomeHome from './components/welcomeHome/welcomehome.jsx';
import Api from './components/FAQ/api.jsx';
import Footer from './components/Footer/footer.jsx';
import Contactus from './components/ContactUs/contactus.jsx';
import About from './components/About/about.jsx';

const App = () => {
  return (
   <div>
    <Router>
        <Routes>
            <Route exact path='/' element={<Signup/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/admindashboard' element={< Dashboard />}></Route>
            <Route exact path='/terms' element={< TermsAndCondition />}></Route>
            <Route exact path='/policy' element={<PrivacyPolicy/>}></Route>
            <Route exact path='/sidebar' element={<Sidebar/>}></Route>
            <Route exact path='/dashboardhome' element={<Home/>}></Route>
            <Route exact path='/service' element={<Service/>}></Route>
            <Route exact path='/serviceProvider' element={<ServiceProvider/>}></Route>
            <Route exact path='/requester' element={<ServiceRequester/>}></Route>
            <Route exact path='/payment' element={<Payment/>}></Route>
            <Route exact path='/categories' element={<Categories/>}></Route>
            <Route exact path='/review' element={<Review/>}></Route>
            <Route exact path='/faq' element={<Api/>}></Route>
            <Route exact path='/footer' element={<Footer/>}></Route>
            <Route exact path='/home' element={<WelcomeHome/>}></Route>
            <Route exact path='/contact' element={<Contactus/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            
            


            
          </Routes>
        </Router>






   </div>
  );
};
export default App;

