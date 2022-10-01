const mongoose = require('mongoose')

const vehicleScheme = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
        ref: 'User'
    },
    licensePlate: {
        type:String,
        unique:true,
        required: true
    },
    sDate: {
        type:Date, 
        required: false
    },
    eDate: {
        type:Date, 
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    engineSize:{    
        type: Number,
        validate(value){
            if(value<0) throw new Error('Engine size must be positive')
        }
    },
    engineType:{
        type: String,
        required:true,
        trim: true
    },
    gear:{
        type: String,
        required:true,
        trim: true
    },
    seats:{
        type: Number,
        required:true,
        validate(value){
            if(value<0) throw new Error('Seats must be positive')
        }
    },
    doors:{
        type: Number,
        required:true,
        validate(value){
            if(value<0) throw new Error('Doors must be positive')
        }
    },
    AC:{
        type:Boolean,
        default: false
    },
    GPS:{
        type:Boolean,
        default: false
    },
    blueTooth:{
        type:Boolean,
        default: false
    },
    numOfBaggage:{
        type:Number,
        validate(value){
            if(value<0) throw new Error('Baggage number must be positive')
        }
    },
    rating:{
        type:Number,
        validate(value){
            if(value<0 || value>5) throw new Error('Rating must be between 0-5')
        }
    },
    isAvail:{
        type:Boolean,
        default:true
    },
    model:{
        type: String,
        required:true,
        trim: true
    },
    year:{
        type: Number,
        required:true,
        validate(value){
            if(value>Date.now()) throw new Error('Vehicle year cannot be above this year')
        }
    },
    carURL:{
        type: String,
    },
    listedTo: {
        type:String,
        required: false
    },
    color:{
        type:String,
    },
    location:{
        type:String,
        required:true
    },
    pricePerDay:{
        type:Number,
        required:true
    }
},
{
    timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleScheme)

module.exports = Vehicle