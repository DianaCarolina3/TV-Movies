import { Schema, model } from 'mongoose'

const movie = new Schema({
  image: {
    type: String,
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
    type: Array,
    required: true,
  },
  youtubeTrailer: {
    type: String,
    required: false,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
})

const Movie = model('Movie', movie)

export default Movie
