const router = require('express').Router()
const {Location, Traveller, Trips} = require('../../models')

router.get('/', async (req,res) => {
    try{
        const locationData = await Location.findAll()
        res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) => {
    const locationData = await Location.create()
})
