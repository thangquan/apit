const express = require('express')
const router = express.Router()

const customersServices = require('../servers/customers/customers.service')

router.delete('/delete/:id', customersServices.deleteCustomerById)
router.post('/update', customersServices.updateCustomer)
router.use('/create', customersServices.addNewCustomer)
router.get('/:id', customersServices.getCustomersById)
router.post('/login', customersServices.login)
router.get('/', customersServices.get)


module.exports = router




