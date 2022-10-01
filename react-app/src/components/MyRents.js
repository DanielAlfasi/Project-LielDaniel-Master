import React from "react";
import axios from "axios";
import Vehicle from "./Vehicle";

export default class MyLists extends React.Component{
    state={
        vehicles:[],
        numOfVehicles:0
    };
    componentDidMount(){
     
            axios.get('http://localhost:4000/myrents',{
                headers:{
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
                }
            }).then((response) => {
                    let vehicles = response.data
                    this.setState({vehicles});  
                }).catch((error)=>{
                console.log(error);
            });
      
    };
    render(){
        return(
           <div>
           <p>My Rents</p>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate}  AC={vehicle.AC} GPS={vehicle.GPS} BT={vehicle.blueTooth} engine={vehicle.engineSize} gear={vehicle.gear} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model} rentButton = {false} removeButtonFromDB = {false} removeRentButton = {true}/>
            })
           }
           </div>
        );
    }
}