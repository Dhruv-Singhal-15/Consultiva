
import Predict from './components/Predict.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import ForgotPassword from './components/ForgotPassword.js'
import ResetPassword from './components/ResetPassword.js';
import './App.css'
import Dashboard from './components/Dashboard.js';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/Predict' element={<Predict />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/resetPassword/:token' element={<ResetPassword />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
    </>
  );
};

<Predict /> 
export default App;
