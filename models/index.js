const Location = require('./Location');
const Traveller = require('./Traveller');
const Trips = require('./Trips');

Location.belongsToMany(Traveller, {
    through: {
        model: Trips,
        unique: false,
    },
    as: 'location_travellers'
});

Traveller.belongsToMany(Location, {
    through: {
        model: Trips,
        unique: false,
    },
    as: 'planned_trips'
});

module.exports = { Location, Traveller, Trips };