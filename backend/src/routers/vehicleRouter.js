const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Vehicle = require('../models/vehicle')
const mongoose= require('mongoose')

// VEHICLE ENDPOINTS REQUESTS

// POST A NEW VEHICLE TO THE SITE ROUTE

router.post('/vehicles', auth ,async (req, res) => {
    const vehicle = new Vehicle({
        ...req.body,
    })
    
    try {
        await vehicle.save()
        res.status(201).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }
 })




// GET ALL USER VEHICLES LIST ROUTE

// SOME OPTIONS
// GET /vehicles?completed=false will get back the incomplete tasks
// GET /vehicles?limit=10 for ten results &skip=0 for the first ten results 
// GET /vehicles?sortBy=createdAt_des {field and then order}
 router.get('/myvehicles' , auth , async (req, res) => {
    const match = {}
    const sort = {}
    
    if (req.query.completed) {
        match.createdAt = req.query.completed === 'true'
    }

    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try { 
         await req.user.populate({
            path: 'vehicles',
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
         }).execPopulate()
         res.send(req.user.vehicles)
    } catch (e) {
        res.status(500).send()
    }

   
})

router.get('/vehicles', async(req,res) => {

    try{
        const vehicles = await Vehicle.find(req.query)
        if(!vehicles) return res.status(404).send()
        res.send(vehicles)
    } catch(e){
        res.status(500).send()
    }

})

//GET COUNT OF VEHICLES IN DB
router.get('/vehicles/count', async(req,res)=>{
    try{
        const count= await Vehicle.countDocuments({isAvail:true})
        res.send({count})
    }catch(error){
        res.status(500).send(error)
    }
})

// GET SPECIFIC VEHICLE BY ID DATA ROUTE

router.get('/vehicles/:id' , auth , async (req, res) => {
    const _id = req.params.id

    try {
        const vehicle = await Vehicle.findOne({_id, owner: req.user._id})
        if(!vehicle) {
            return res.status(404).send()
        }
        res.send(vehicle)
    } catch (e) {
        res.status(500).send()
    }

   
})
router.get('/vehicles/details/distinct', async(req,res)=>{
    try{
        const manufacutrers= await Vehicle.distinct("manufacturer")
        res.send(manufacutrers)
    }catch(error){
        res.status(404).send(error)
    }
})

// DELETE A LISTED VEHICLE ROUTE

router.delete('/vehicle', auth , async (req, res) => {
    try {
        const vehicle = await Vehicle.findOneAndDelete({_id : req.query._id})
        if (!vehicle) {
            return res.status(404).send()
        }
        res.status(200).send(vehicle)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router