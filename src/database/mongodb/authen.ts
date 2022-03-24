import Authen from '../../utils/models-mongodb/md-db-authen'

const list = async () => {
  const data = await Authen.find()
  return data
}

const get = async (id: string) => {
  const data = await Authen.where({ _id: id }).findOne()
  return data
}

const query = async (data: any) => {
  const user = data.username
  const email = data.email

  const items = await list()

  const payload = items.map((item: any) => {
    if (item.username === user && item.email === email) {
      return item.password
    }
  })

  const result = payload.filter((itemsArray: any) => {
    return itemsArray != undefined
  })

  return result[0]
}

const insert = async (data: any) => {
  const auth = new Authen({
    username: data.username,
    email: data.email,
    password: data.password,
    dateCreation: data.dateCreation,
  })

  const items = await auth.save()
  return items
}

const update = async (id: string, data: any) => {
  //falta update
  const auth = new Authen(
    { _id: id },
    {
      username: data.username,
      password: data.password,
      dateCreation: data.dateCreation,
    }
  )

  const items = await auth.save()
  return items
}

const upsert = async (data: any) => {
  const ID = await get(data.id)
  if (ID) {
    return update(data.id, data)
  } else {
    return insert(data)
  }
}

export = { list, get, query, upsert }
