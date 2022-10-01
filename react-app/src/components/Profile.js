import React   , {useState} from "react";
//import axios from 'axios';
import ProfileDetails from "./ProfileDetails";
import MyLists from "./MyLists";
import MyRents from "./MyRents";

export default function Profile(){
    const user = JSON.parse(localStorage.getItem('User'));
    return(
        <div>
            <ProfileDetails name = {user.name} email = {user.email} avatar={user.avatar}/>
            <br>
            </br>
            <MyLists user = {user} />
            <MyRents owner = {user._id} />
        </div>
    );
}

// <MyLists/>
// <MyRents/>