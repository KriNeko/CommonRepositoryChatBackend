const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Server Working!')
})

require('./src/controllers/auth')(app)

app.listen(port, () => {
  console.log(`server working: http://localhost:${port}/`)
})