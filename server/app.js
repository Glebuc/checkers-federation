const express = require('express')

const app = express()


const port = 3000

app.get('/', (req, res) => { //get-получить
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`)
})