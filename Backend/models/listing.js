const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  builtInYear: {
    type: Number,
    required: true,
  },
  parking: {
    type: String,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Listing', listingSchema)
