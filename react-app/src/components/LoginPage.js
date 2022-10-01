import React   , {useState} from "react";
import axios from 'axios';
// NEEDS TO PUT SWEETALERT HERE
async function Submit(e){
    e.preventDefault();
    await axios.post('http://localhost:4000/users/login',{
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }).then((response)=>{
        if(response.status=200){
            console.log(response);
            localStorage.setItem('User',JSON.stringify(response.data.user));
            localStorage.setItem('Token',JSON.stringify(response.data.token));
            window.location.href="/Profile";
        } 
    }).catch((error)=>console.log(error));
}

export default function LoginPage(){
    const [email, setEmail] = useState(undefined);
    const [password,setPassword] = useState(undefined);

    const handleInputChange = (e) => { 
    const {id , value} = e.target;
        if(id === "email"){
            return setEmail(value);
        }
        if(id === "password"){
            return setPassword(value);
        }
    }

    return(
        <div class='login-box'>
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input id="email" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={email} ></input>
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input id="password" type="text" name="" required   onChange = {(e) => handleInputChange(e)} value={password}></input>
                    <label>Password</label>
                </div>    

                <div class="button-form">
                <button id="submit" onClick={Submit}>Login</button>
                    
                    <div id="register">
                        Don't have an account ?
                        <a href="#"> Register</a>
                    </div>
                </div>
                
            </form>
        </div>
    );
}