const express = require('express')
const router = express.Router()
const employeeController = require('../controller/employee-controller')

router.post('/getEmployee',employeeController.getEmployee)
router.post('/createEmployee',employeeController.createEmployee)
router.post('/updateEmployee',employeeController.updateEmployee)
router.post('/deleteEmployee',employeeController.deleteEmployee)

module.exports = router