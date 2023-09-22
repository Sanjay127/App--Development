import * as React from 'react';
import './assets/css/App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';  
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

import Dashboard from './components/Admin/Dashboard/dashboard.jsx';
import Home from './components/Admin/Home/home.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        
          <Routes>
            <Route exact path='/' element={< Signup />}></Route>  
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/adminDashboard' element={< Dashboard />}></Route>  
            <Route exact path='/dashboardhome' element={< Home />}></Route>  
            
          </Routes>
      
      </Router>

    </div>
  );
}

export default App;
