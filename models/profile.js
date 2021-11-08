import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hamsterSchema = new Schema ({
  name: String,
  food: String,
}, {
  timestamps: true,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  hamsters: [hamsterSchema]
}, {
  timestamps: true
})


const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}