const { createConnection } = require('mongoose')
const mongoUrl = 'mongodb+srv://JS_Misc:JS_Misc123@js-misc-chat.wmhhn.mongodb.net/user?retryWrites=true&w=majority'

export const mongoConnection = createConnection(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})