const router = require('express').Router()
const {Location, Traveller, Trips} = require('../../models')

router.get('/', async (req,res) => {
    try{
        const travellerData = await Traveller.findAll({
            include: [{model: Trips},{model: Location}]
        })
        res.status(200).json(travellerData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', async (req,res) => {
    try{
        const travellerData = await Traveller.create(req.body)
        res.status(200).json(travellerData)
    } catch (err){
        res.status(400).json(err)
    }
})

router.get('/:id', async (req,res) => {
    try {
        const travellerData = await Traveller.findByPK(req.params.id, {
            include: [{model: Trips},{model: Location}]
        })
        if(!travellerData) {
            res.status(404).json({message: "No traveller found with id!"})
            return
        }
        res.status(200).json(travellerData)
    } catch {
        res.status(500).json(err);
    }
})

router.delete('/:id', async (req,res) => {
    try{
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!travellerData){
            res.status(404).json({ message: 'No reader found with that id!' });
            return;
        }
        res.status(200).json(travellerData)
    } catch (err){
        res.status(500).json(err)
    }
})

