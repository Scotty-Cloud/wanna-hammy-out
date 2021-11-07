import mongoose from 'mongoose'

const Schema = mongoose.Schema

const breedSchema = new Schema({
  name: String,
  aggressive: Boolean,
  owner: {type: Schema.Types.ObjectId, 'ref': "profile"}
})

const Breed = mongoose.model('Breed', breedSchema)

export {
  Breed
}
