npm i

scripts:
npm start

host: https://js-misc-chat.herokuapp.com/
registration: https://js-misc-chat.herokuapp.com/auth/registration
registration body: {
  login: uniq, min3, max20
  password: min5, max25, [/\w/]
}
