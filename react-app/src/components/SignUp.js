import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

async function Submit(e){
    e.preventDefault();
    let age= document.getElementById('age').value;
    if(!age) age=0;
    await axios.post('http://localhost:4000/users',{
        email: document.getElementById('email').value,
        password:document.getElementById('password').value,
        age,
        name: document.getElementById('name').value
    }).then((response)=>{
        if(response.status===201){
            Swal.fire(
                'Good job!',
                'Your user assigned to the system and ready to use!',
                'success'
            );
        }
        localStorage.setItem('User',JSON.stringify(response.data.user));
        localStorage.setItem('Token',JSON.stringify(response.data.token));
        window.location.href='/Profile'; 
    }).catch((error)=>{
        console.log(error);
        if(error.response.data.errmsg){
            return Swal.fire({
                icon: 'error',
                title: 'Duplicated Value',
                text: 'This email is taken'});
        }
        Swal.fire({
            icon: 'error',
            title: error.response.data._message,
            text: error.response.data.message});
    });
}

function SignUp(){
    const [name, setName] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [age,setAge] = useState(undefined);
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            return setName(value);
        }
        if(id === "password"){
            return setPassword(value);
        }
        if(id === "email"){
            return setEmail(value);
        }
        if(id === "age"){
            return setAge(value);
        }
    }
    return(
        <div class='login-box'>
            <h2>Sign Up</h2>
            <form>
                <div class="user-box">
                    <input id="email" type="text" name="" required onChange = {(e) => handleInputChange(e)} value={email} ></input>
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input id="password" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={password}></input>
                    <label>Password</label>
                </div>    
                <div class="user-box">
                    <input id="name" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={name} ></input>
                    <label>Fullname</label>
                </div>
                <div class="user-box">
                     <input id="age" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={age}></input>
                     <label>Age</label>
                </div>    

                <div class="button-form">
                <button id='submit' onClick={Submit}>Sign Up</button>
                    
                    <div id="register">
                        Already have an account ?
                        <br></br>
                        <a href="#">Login</a>
                    </div>
                </div>
                
            </form>
        </div>   
    );
    // return(
    //     <div>
    //         <form>
    //             <input id="name" placeholder="Enter name" onChange = {(e) => handleInputChange(e)} value={name} required></input>
    //             <input id="password" placeholder="Enter password" onChange = {(e) => handleInputChange(e)} value={password} required></input>
    //             <input id="email" placeholder="Enter email" onChange = {(e) => handleInputChange(e)} value={email} required></input>
    //             <input id="age" placeholder="Enter age" onChange = {(e) => handleInputChange(e)} value={age}></input>
    //             <input type="file" id="file"></input>
    //             
    //             <br></br>
    //             <p>Already have an account?</p>
    //             <Link to='/../Login'>Log In</Link>
    //         </form>
    //     </div>
    // );
}

export default SignUp;