import express from 'express'
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.json())
app.get('/test', (req, res, next) => {
  const param = { test: 'Hello World!' }
  res.send(param)
})

export default app
