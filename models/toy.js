import mongoose from 'mongoose'

const Schema = mongoose.Schema

const toySchema = new Schema({
  name: String,
  fun: Boolean,
  owner: {type: Schema.Types.ObjectId, 'ref': "profile"}
})

const Toy = mongoose.model('Toy', toySchema)

export {
  Toy
}
