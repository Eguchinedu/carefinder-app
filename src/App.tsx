import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from './components/page-not-found/PageNotFound';
import HospitalList from './hospital-list/HospitalList';
import ForgotPwd from './login-components/forgotpwd/ForgotPwd';
import ResetPwd from './login-components/resetpwd/ResetPwd';
import SignUp from './login-components/signup/SignUp';
import Footer from './components/footer/Footer';
import HomePage from './home-page/HomePage';
import LoginPage from './login-components/login-page/LoginPage';
import NavBar from './components/nav-bar/Navbar';

function App() {
  
  return (
    <div className="App">
       <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/login'element={<LoginPage/>}/>
          <Route path='/forgotpwd'element={<ForgotPwd/>}/>
          <Route path='/forgotpwd/reset'element={<ResetPwd/>}/>
          <Route path="/hospital-list" element={<HospitalList/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <div className="footer-bg">

        <Footer/>
        </div>
        </Router>
    </div>
  );
}

export default App;
