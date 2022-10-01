import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ListCar from './components/ListCar';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import IndexFilter from './components/IndexFilter';
import Profile from './components/Profile';
import AllVehicles from './components/AllVehicles';
import "./styles/style.css";

function App() {
  const user= localStorage.getItem('User')
  return ( 
    <BrowserRouter>
      <div class='container'>
        <Header user={user}/>
        <Menu/>
        <Routes>
          <Route exact path="/" element={<div><IndexFilter/><AllVehicles result={false}/></div>}></Route>
          <Route exact path="/SignUp" element={<SignUp/>}></Route>
          <Route exact path="/Login" element={<LoginPage/>}></Route>
          <Route exact path="/Profile" element={<Profile/>}></Route>
          <Route exact path="/List" element={<ListCar/>}></Route>
          <Route exact path="/Results" element={<AllVehicles result={true}/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;