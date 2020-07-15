const Facility = require('../../models/facility');

module.exports = {
    create,
}

async function create(req, res) {
    const facility = await Facility.create(req.body);
    res.status(201).json(facility);
  }