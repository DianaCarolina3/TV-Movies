import dotenv from 'dotenv'
import Config from '../utils/models/md-config'

dotenv.config()

const config: Config = {
  server: {
    port: process.env.PORT || 3000,
  },
  mongodb: {
    url: process.env.MONGO_URL,
  },
}

export default config
