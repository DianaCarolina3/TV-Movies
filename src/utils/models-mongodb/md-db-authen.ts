import { Schema, model } from 'mongoose'

const authen = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreation: {
    type: Date,
    required: true,
  },
})

const Authen = model('Authen', authen)

export default Authen
