const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let employeeSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    empId: {
        type: Number
    }
}, {
    collection: 'employee'
})
module.exports = mongoose.model('Employee',employeeSchema)