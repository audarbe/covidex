const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const facilitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    suiteNum: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
        enum: [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
            'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
            'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
            'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
        ],
    },
    languages: {
        type: String,
        required: true,
        enum: [
            'EN', 'ES', 'ZH', 'FR', 'TL', 'VI', 'KO', 'DE', 'AR', 'RU',
        ]
    },
    zipCode: {
        type: Number,
        required: true,
        min: 0,
    },
    userId: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Facility', facilitySchema);