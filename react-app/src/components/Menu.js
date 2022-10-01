import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../styles/style.css";

const Logout=()=>{
    axios.post('http://localhost:4000/users/logoutAll',{

    },{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
    localStorage.clear();
}

export default function Menu(){
    if(localStorage.getItem('User')){
        return(
            <div class='menu'>
                <Link to='/'><span>Home</span></Link>
                <Link to='/Profile'><span>My Profile</span></Link>
                <Link to='/List'><span>List a car</span></Link>
                <a href='/' onClick={Logout}><span>Logout</span></a>
            </div>
        );
    }
    return(
        <div class='menu'>
            <Link to='/'><span>Home</span></Link>
            <Link to='/SignUp'><span>Sign up</span></Link>
            <Link to='/Login'><span>Login</span></Link>
            <Link to='/List'><span>List a car</span></Link>
        </div>
    );
}