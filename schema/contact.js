const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    text: {
        type: 'string',
        required: true,
    },
    title: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
},{ timestamps: true });
const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;