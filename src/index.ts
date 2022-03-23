import express from 'express'

import router from './routes/router'
import handleConectionMongo from './database/connection'
import config from './config'

const app = express()

const PORT: number | any = config.server.port

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

router(app)

app.listen(PORT, () => {
  handleConectionMongo()
  console.log(`Server listening on the port ${PORT}`)
})
