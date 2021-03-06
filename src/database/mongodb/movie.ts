import Movie from '../../utils/models-mongodb/md-db-movie'

const list = async () => {
  const data = await Movie.find().exec()

  return data
}

const get = async (id: string) => {
  const data = await Movie.where({ id: id }).findOne()

  return data
}

const insert = async (data: any) => {
  const movie = new Movie({
    image: data.image,
    title: data.title,
    description: data.description,
    duration: data.duration,
    multipleCategories: data.multipleCategories,
    youtubeTrailer: data.youtubeTrailer,
    releaseDate: data.releaseDate,
  })

  const payload = await movie.save()

  return payload
}

const update = async (data: any, id: string) => {
  await Movie.findByIdAndUpdate(
    { _id: id },
    {
      img: data.img,
      title: data.title,
      price: data.price,
      description: data.description,
      dateCreation: data.dateCreation,
    },
    { upsert: true }
  )
    .then((res: any) => {
      console.log(res)
      return res
    })
    .catch((err: Error) => {
      console.error(err)
    })
}

const upsert = (data: any, id: string) => {
  if (id) {
    return update(data, id)
  } else {
    return insert(data)
  }
}

const remove = async (id: string) => {
  const data = await Movie.findByIdAndDelete(id)

  return data
}

export default { upsert, list, get, remove }
