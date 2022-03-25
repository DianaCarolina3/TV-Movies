import bcrypt from 'bcrypt'
import storeUser from '../../../database/mongodb/user'

const list = async () => {
  const data = await storeUser.list()

  return data
}

const get = async (id: string) => {
  if (!id) {
    throw Error('Id invalid or no id')
  }

  const data = await storeUser.get(id)

  return data
}

const insert = async (body: any) => {
  const pass = body.password
  const saltRounds = 5
  const salt = bcrypt.genSaltSync(saltRounds)
  const passwordHash = bcrypt.hashSync(pass, salt)

  const user = {
    username: body.username,
    name: body.name,
    email: body.email,
    password: passwordHash,
    admin: body.admin ? false : body.admin,
    dateCreation: new Date(),
  }

  return await storeUser.insert(user)
}

const remove = async (id: string) => {
  if (!id) {
    throw Error('Id invalid or no id')
  }

  return await storeUser.remove(id)
}

export default {
  list,
  get,
  insert,
  remove,
}
