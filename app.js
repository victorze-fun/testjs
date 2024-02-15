import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const name = 'Victor'
  res.send(`Hello, ${name}`)
})

export default app
