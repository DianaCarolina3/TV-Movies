import { Schema, model } from 'mongoose'

const movie = new Schema<any>({
  image: {
    type: Image || String || HTMLImageElement,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String || Number,
    required: false,
  },
  multipleCategories: {
    type: String,
    required: true,
  },
  youtubeTrailer: {
    type: String || File || HTMLVideoElement,
    required: false,
  },
  releaseDate: {
    type: String || Number,
    required: true,
  },
})

const Movie = model('Movie', movie)

export default Movie
