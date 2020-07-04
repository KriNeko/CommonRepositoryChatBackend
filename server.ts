const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('./src/auth')(app)

app.listen(port, () => {
  console.log(`server working: http://localhost:${port}/`)
})