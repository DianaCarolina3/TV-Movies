import mongoose from 'mongoose'
import config from '../../config'

const URI = config.mongodb.url

async function handleConectionMongo(): Promise<void> {
  await mongoose
    .connect(URI)
    .then(() => {
      console.log('Succesful connection mongoDB')
    })
    .catch((err) => {
      console.error('Error in connection with mongo', err)
    })
}

export default handleConectionMongo
