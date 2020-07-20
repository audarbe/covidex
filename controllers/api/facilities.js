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
    try {
        const facilities = await Facility.find({});
        facilities.sort(function(a, b) {
            if (a.state < b.state)
                return -1 
            if (a.state > b.state)
                return 1
            return 0
        })
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
        const updatedFacility = await Facility.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedFacility);
    } catch (err) {
        res.json({ err });
    }
}