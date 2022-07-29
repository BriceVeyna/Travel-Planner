const router = require('express').Router()
const travellersRoute = require('/travellersRoutes')
const locationsRoute = require('./locationsRoutes')

router.use('/travellers', travellersRoute)
router.use('/locations', locationsRoute)

module.exports = router