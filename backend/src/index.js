const express=require('express')
require('./db/mongoose')
const cors = require('cors');

const vehicleRouter= require('./routers/vehicleRouter')
const Vehicle = require('./models/vehicle');

const userRouter= require('./routers/usersRouter')
const User = require('./models/user')

const rentRouter= require('./routers/rentRouter')
const rentVehicle = require('./models/rent')

const app=express()
const port= process.env.PORT || 4000

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  ); 
app.use(express.json())
app.use(userRouter)
app.use(vehicleRouter)
app.use(rentRouter)

app.listen(port,()=>{
    console.log('Server is up on port', port)
})