import express from 'express'

import router from './routes/router'
import handleConectionMongo from './database/connection'
import config from './config'

const app = express()

const PORT: number | any = config.server.port

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Router
router(app)

app.listen(PORT, () => {
  // Connection Mongo DB
  handleConectionMongo()
  // Server
  console.log(`Server listening on the port ${PORT}`)
})
