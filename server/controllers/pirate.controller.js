const Pirate = require('../models/pirate.model');


module.exports.createPirate = (req, res) => {

    const { name,imageURL,treasures,phrase,crewProsition,pegLeg,eyePatch,hookHand } = req.body;
    
    Pirate.create(
        { name,imageURL,treasures,phrase,crewProsition,pegLeg,eyePatch,hookHand }
    )
        .then(pirate => res.json({ insertedPirate: pirate, msg: 'Successful creation' }))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPirates = ( _ , res) => {

    Pirate.find({})

        .then(retrievedPirates => res.json(retrievedPirates))
        .catch(err => res.json(err))

}

module.exports.getPirate = (req, res) => {

    Pirate.findOne({_id:req.params.id})

        .then(pirate => res.json(pirate))
        .catch(err => res.json(err))

}

module.exports.updatePirate = (req, res) => {

    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})

        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.json(err))

}

module.exports.deletePirate = (req, res) => {

    Pirate.deleteOne({ _id: req.params.id })

        .then(deletedPirate => res.json(deletedPirate))
        .catch(err => res.json(err))

}

