const express=require('express')
const rentVehicle = require('../models/rent')
const router= new express.Router()
const auth = require('../middleware/auth')
const Vehicle = require('../models/vehicle')

router.post('/rentvehicle', auth , async (req, res) => {
    const rent = new rentVehicle({
        owner : req.user._id,
        vehicle: req.body
    })
    try {
        await rent.save()
        await Vehicle.findOneAndUpdate( {_id: rent.vehicle } , {listedTo:req.user._id , isAvail: false})
        res.status(201).send(rent)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/removerent' , auth , async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndUpdate(req.query._id, {listedTo: undefined , isAvail: true})
        if (!vehicle) {
            return res.status(404).send()
        }
        res.status(200).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/myrents', auth , async (req, res) => {
    try{
        // console.log(req.user._id)
        // const rents = await rentVehicle.find({owner : req.user._id})
        const vehicles = await Vehicle.find({listedTo : req.user._id})
        if (!vehicles) return res.status(404).send()
        res.send(vehicles)
    } catch(e){
        res.status(500).send()
    }
})




module.exports = router