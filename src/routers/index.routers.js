const customersRouters = require('./customers.routers')
const employeesRouters = require('./employees.routers')

module.exports = route = (app) => {
    app.use('/customers', customersRouters)
    app.use('/employees', employeesRouters)
}
