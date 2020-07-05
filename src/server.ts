const express = require('express')
const { connect } = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()
const upload = multer()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(upload.array())

app.get('/', (req, res) => {
  res.send('Server Working!')
})

require('./controllers/auth')(app)

app.listen(port, () => {
  const mongoUrl = 'mongodb+srv://JS_Misc:JS_Misc123@js-misc-chat.wmhhn.mongodb.net/js_misc_db?retryWrites=true&w=majority'
  connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  console.log(`server working: http://localhost:${port}/`)
})