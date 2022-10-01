import React from "react";
import axios from 'axios';
import "../styles/style.css";
//import Swal from "sweetalert2";

function Submit(){
  // const thisYear=new Date().getFullYear();
  // const year= document.getElementById('year').value;
  // if(year)
  //   if(year>thisYear || year<2000){
  //     return Swal.fire({
  //       icon: 'error',
  //       title: 'Year Problem!',
  //       text: 'In order to search a vehicle you have to apply a year between 2000 and '+ thisYear+ '. Or not at all'});
  //   } ******TO COMPLETE LATER********
  const manufacturer=document.getElementById('manufacturer').value;
  const gear= document.getElementById('gear').value;
  const AC= document.getElementById('AC').checked;
  const blueTooth= document.getElementById('BT').checked;
  const GPS= document.getElementById('GPS').checked;
  let params={};
  if(manufacturer === 'Select A Manufacturer')
    if(gear === 'Select Gear Type')
      params={AC, blueTooth, GPS};
    else params={AC, blueTooth, GPS, gear};
  else if (gear === 'Select Gear Type') params={AC, blueTooth, GPS, manufacturer};
  else params={AC,blueTooth,GPS,manufacturer,gear};
  console.log(params);
  axios.get('http://localhost:4000/vehicles',{params}).then((response)=>{
    localStorage.setItem('VehiclesAvail',JSON.stringify(response.data))
    window.location.href='/Results';
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}
export default class IndexFilter extends React.Component{
  state={
    manufacturers:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/vehicles/details/distinct').then((response)=>{
      const manufacturers=response.data;
      this.setState({manufacturers});
    }).catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return(
      <div class='indexFilter'>
        <input id='sDate' type='date'></input>
        <input id='eDate' type='date'></input>
        <select id='manufacturer'>
          <option>Select A Manufacturer</option>
          {this.state.manufacturers.map((manufacturer)=>{
            return <option key={manufacturer} id={manufacturer} value={manufacturer}>{manufacturer}</option>
          })}
        </select>
        <select id='gear'>
          <option>Select Gear Type</option>
          <option>Auto</option>
          <option>Manual</option>
        </select>
        <input id='year' type='number' min='2000' max={new Date().getFullYear()} placeholder='Year Above'></input>
        <br></br>
        <label>Do you want AC?</label>
        <input class='checkboxs' id='AC' type='checkbox'></input>
        <label>Do you want BlueTooth?</label>
        <input class='checkboxs' id='BT' type='checkbox'></input>
        <label>Do you want GPS?</label>
        <input class='checkboxs' id='GPS' type='checkbox'></input>
        <br></br>
        <button id='searchButton' onClick={Submit}>Search!</button>
      </div>
    );
  }
}