const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
} ,{ collection: 'employee' });

const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee;
