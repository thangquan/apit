const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
const router = require('./routers/index.routers')
router(app)

app.get('/', (req, res) => {
  res.send({message: 'Hello'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})