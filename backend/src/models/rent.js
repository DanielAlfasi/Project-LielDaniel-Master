const mongoose = require('mongoose')
const Vehicle = require('./vehicle')

const rentSchema = new mongoose.Schema({
    vehicle: {
        type : String,
        required: true,
        ref: 'Vehicle'
    },
    owner : {
        type: String,
        required: true,
        ref: 'User'
    }

})



const rentVehicle = mongoose.model('rentVehicle', rentSchema)

module.exports = rentVehicle