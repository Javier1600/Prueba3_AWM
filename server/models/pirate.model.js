const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const PirateScheme = new mongoose.Schema({
    name: {
        type:  String,
        required: [true, 'Authors name is mandatory'],
    },
    imageURL:{
        type: String,
        required: [true, 'Image URL is mandatory']
    },
    treasures: {
        type: String,
        required: [true, 'Number of treasures is mandatory']
    },
    phrase: {
        type: String,
        required: [true, 'Phrase is mandatory']
    },
    crewProsition: {
        type: String,
        required: [true, 'Crew position is mandatory']
    },
    pegLeg: {
        type: Boolean,
        required: [true, 'Peg leg is mandatory']
    },
    eyePatch: {
        type: Boolean,
        required: [true, 'Eye patch is mandatory']
    },
    hookHand: {
        type: Boolean,
        required: [true, 'Hook hand is mandatory']
    }

});

const Pirate = mongoose.model('Pirate', PirateScheme);

module.exports = Pirate;