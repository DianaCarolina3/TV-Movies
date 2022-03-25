import storeMongo from '../../../database/mongodb/movie'

const list = async () => {
  return await storeMongo.list()
}

const get = async (id: string) => {
  if (!id) {
    throw Error('Id invalid or no id')
  }

  return await storeMongo.get(id)
}

const upsert = async (body: any, id: string) => {
  const movie = {
    image: body.image,
    title: body.title,
    description: body.description,
    duration: body.duration,
    multipleCategories: body.multipleCategories,
    youtubeTrailer: body.youtubeTrailer,
    releaseDate: body.releaseDate,
  }

  return await storeMongo.upsert(movie, id)
}

const remove = async (id: string) => {
  if (!id) {
    throw Error('Id invalid or no id')
  }
  return await storeMongo.remove(id)
}

export default {
  list,
  get,
  upsert,
  remove,
}
