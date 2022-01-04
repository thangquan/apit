const express = require('express')
const router = express.Router()

const employeesService = require('../servers/employees/employees.service')

router.use('/delete/:id', employeesService.deleteEmployeesById)
router.use('/update', employeesService.updateEmployees)
router.use('/create', employeesService.addNewEmployees)
router.use('/:id', employeesService.getEmployeesById)
router.use('/', employeesService.get)

module.exports = router