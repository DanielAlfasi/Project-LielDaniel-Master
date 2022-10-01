import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import "../styles/style.css";


async function Submit(_id , removeButtonFromDB, rentButton , removeRentButton){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false

      }) 

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        html: '<p>adssad</p>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
     
    if (rentButton) {
      axios.post('http://localhost:4000/rentvehicle',{
        _id
    },{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log('formsad')
        console.log(error);
    });
    }else if(removeButtonFromDB){
      axios.delete(`http://localhost:4000/vehicle?_id=${_id}`,{
        headers:{
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
      }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    } else if (removeRentButton) {
      axios.patch(`http://localhost:4000/removerent?_id=${_id}`, {
      },{
        headers:{
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
      }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
    
}

export default function Vehicle(props){
    return(
    <div class='vehicle'>
          <h1>{props.manufacturer} {props.model}</h1>
          <p class="title">{props.description}</p>
          <p>Vehicle Features</p>
          {props.AC ?  <span class='carFeatureON'>AC </span> : <span class='carFeatureOFF'>AC </span>}
          {props.GPS?  <span class='carFeatureON'>GPS </span> : <span class='carFeatureOFF'>GPS </span>}
          {props.BT ?  <span class='carFeatureON'>BT </span> : <span class='carFeatureOFF'>BT </span>}
          <p>Engine: {props.engine}</p>
          <p>Gear: {props.gear}</p>
          {props.rentButton &&  <p><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Rent Me!</button></p>}
          {props.removeButtonFromDB &&  <p><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Remove</button></p>}
          {props.removeRentButton &&  <p><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Unrent</button></p>}
      </div>
    );
}