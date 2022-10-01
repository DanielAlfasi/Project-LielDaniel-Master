import React, { useState } from "react";
import axios from 'axios';

async function saveImg(file){
    console.log(file);
    let formData = new FormData()
    formData.append('avatar', file);
    await axios.post('http://localhost:4000/users/me/avatar',formData,{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}

const ProfileDetails = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  if(props.avatar){
    return (
      <div>
        <h3>My profile details:</h3>
        <p>Name : {props.name}</p>
        <p>Email : {props.email}</p>
        <img src={`data:image/jpeg;base64,${props.avatar}`} alt='No match'/>
        <br/>
        {selectedImage && (
          <div>
          <img id='profilePic' alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          <button onClick={(event)=>saveImg(selectedImage)}>Save</button>
          </div>
        )}
        <br />
        <br /> 
        <label>Click here to change your profile picture: </label>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    );
  }else{
    return(
        <div>
          <h1>My profile details:</h1>
          <p>Name : {props.name}</p>
          <p>Email : {props.email}</p>
          <label>No profile picture yet!</label>
          {selectedImage && (
            <div>
            <img id='profilePic' alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            <br />
            <button onClick={()=>setSelectedImage(null)}>Remove</button>
            <button onClick={(event)=>saveImg(selectedImage)}>Save</button>
            </div>
          )}
          <br />
          <br /> 
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
    );
  }
};

export default ProfileDetails;