const express = require('express')
const router = require('./router/index')

const app = express()


const port = 3000


app.use('/api', router)




app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`)
})