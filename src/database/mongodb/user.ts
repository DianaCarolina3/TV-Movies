import User from '../../utils/models-mongodb/md-db-user'
// import Authen from '../../models/authen'

const list = async () => {
  const data = await User.find().exec()

  return data
}

const get = async (id: string) => {
  const data = await User.where({ id: id }).findOne()

  return data
}

const insert = async (data: any) => {
  const user = new User({
    name: data.name,
    username: data.username,
    email: data.email,
    password: data.password,
    admin: data.admin,
    dateCreation: data.dateCreation,
  })

  const payload = await user.save()

  return payload
}

const remove = async (id: string) => {
  const data = await User.findByIdAndDelete(id)

  return data
}

export default { insert, list, get, remove }
