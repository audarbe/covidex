const Facility = require('../../models/facility');

module.exports = {
    create,
    index,
    delete: deleteOne,
    update,
}

async function create(req, res) {
    try {
        const facility = await Facility.create(req.body);
        res.status(201).json(facility);
    } catch (err) {
        res.json({ err });
    }
}

async function index(req, res) {
    console.log(req.user)
    try {
        const facilities = await Facility.find({});
        res.status(200).json(facilities);
    } catch (err) {
        res.json({ err });
    }
}

async function deleteOne(req, res) {
    try {
        const deletedFacility = await Facility.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedFacility);
    } catch (err) {
        res.json({ err });
    }
}

async function update(req, res) {
    try {
        const updatedFacility = await Facility.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedFacility);
    } catch(err) {
        res.json({ err });
    }
  }